import type { Request, Response } from "express";

import asyncHandler from "../../utils/asyncHandler.js";

import authService from "./auth.service.js";

import type { RegisterInput } from "./auth.types.js";

class AuthController {
  register = asyncHandler(async (req: Request, res: Response) => {
    const data = req.body as RegisterInput;

    const user = await authService.register(data);

    res.status(201).json({
      success: true,
      message: "Registration successful",
      data: user,
    });
  });
}

export default new AuthController();
