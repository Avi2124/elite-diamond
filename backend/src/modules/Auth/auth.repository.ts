import { prisma } from "../../config/database.js";

interface CreateUserData {
  name: string;
  email: string;
  passwordHash: string;
  phone?: string;
}

class AuthRepository {
  async findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async createUser(data: CreateUserData) {
    return prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        passwordHash: data.passwordHash,
        phone: data.phone,
      },

      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        platformRole: true,
        status: true,
      },
    });
  }
}

export default new AuthRepository();
