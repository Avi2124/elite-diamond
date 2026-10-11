import type {
  RequestHandler,
} from "express";

import { z } from "zod";

import AppError from "../utils/AppError.js";

export const validate = (
  schema: z.ZodType
): RequestHandler => {
  return (req, _res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = result.error.issues.map(
        (issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })
      );

      return next(
        new AppError(
          JSON.stringify(errors),
          400
        )
      );
    }

    req.body = result.data;

    next();
  };
};