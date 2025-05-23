import prisma from "../utils/client.js";

export const getPersonaldata = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";
    const offset = page * limit;

    const searchCondition = {
      OR: ["first_name", "last_name", "email", "gender", "ip_address"].map((field) => ({
        [field]: {
          contains: search,
          mode: "insensitive",
        },
      })),
    };

    const [totalRows, result] = await Promise.all([
      prisma.personaldata.count({ where: searchCondition }),
      prisma.personaldata.findMany({
        where: searchCondition,
        skip: offset,
        take: limit,
        orderBy: { id: "desc" },
      }),
    ]);

    const totalPages = Math.ceil(totalRows / limit);

    return res.status(200).json({
      result,
      page,
      limit,
      totalRows,
      totalPages,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
