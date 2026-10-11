import bcrypt from "bcryptjs";

import authRepository from "./auth.repository.js";

import type { RegisterInput } from "./auth.types.js";

import AppError from "../../utils/AppError.js";

class AuthService {
  async register(data: RegisterInput) {
    const existingUser = await authRepository.findUserByEmail(data.email);

    if (existingUser) {
      throw new AppError("An account with this email already exists", 409);
    }

    const passwordHash = await bcrypt.hash(data.password, 12);

    try {
      const user = await authRepository.createUser({
        name: data.name,
        email: data.email,
        passwordHash,
        phone: data.phone,
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();
