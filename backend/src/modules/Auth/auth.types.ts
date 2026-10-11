import { z } from "zod";

import { registerSchema } from "./auth.validation.js";

export type RegisterInput = z.infer<typeof registerSchema>;

export interface RegisterResponse {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  platformRole: string;
  status: string;
}
