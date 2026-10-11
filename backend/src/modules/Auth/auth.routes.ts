import { Router } from "express";

import authController from "./auth.controller.js";

import { validate } from "../../middlewares/validate.middleware.js";

import { registerSchema } from "./auth.validation.js";

const router = Router();

router.post("/register", validate(registerSchema), authController.register);

export default router;
