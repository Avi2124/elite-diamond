import "dotenv/config";

import app from "./app.js";
import { prisma } from "./config/database.js";

const PORT = Number(process.env.PORT) || 5000;

const startServer = async () => {
  try {
    await prisma.$connect();

    console.log("PostgreSQL connected successfully");

    app.listen(PORT, () => {
      console.log(`Elite Diamond API running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
};

startServer();