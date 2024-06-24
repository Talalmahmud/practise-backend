import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async (req, res) => {
  return res.status(200).json({ success: true, message: "Get users" });
};

export const addUser = async (req, res) => {
  const { email, name } = req.body;

  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (findUser) {
    return res.status(300).json({ success: false, message: "User existed" });
  } else {
    try {
      const newUser = await prisma.user.create({
        data: {
          email: email,
          name: name,
        },
        select: {
          email: true,
          name: true,
        },
      });

      return res.status(200).json({ success: true, user: newUser });
    } catch (error) {
      return res.status(400).json({ success: false, message: error });
    }
  }
};
