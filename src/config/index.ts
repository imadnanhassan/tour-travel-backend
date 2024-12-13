import dotenv from 'dotenv';
import path from 'path';

// dotenv.config({ path: path.join(process.cwd(), ".env") });
dotenv.config();

export default {
  database_url: process.env.DATABASE_URL,
  port: process.env.PORT,
};
