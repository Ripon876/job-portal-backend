export const PORT = process.env.PORT || 5000;
export const FRONTEND_BASE =
  process.env.FRONTEND_BASE || "http://localhost:5173";
export const BYCRYPT_SALT_ROUND = process.env.BYCRYPT_SALT_ROUND || 10;
export const ADMIN_DOMAIN = process.env.ADMIN_DOMAIN || "test.com";

export const JWT_SECRET = process.env.JWT_SECRET || "my-super-secret";
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

export const DB_USER_NAME = process.env.DB_USER_NAME || "admin";
export const DB_PASSWORD = process.env.DB_PASSWORD || "admin";
export const DB_NAME = process.env.DB_NAME || "job-portal";
export const DB_HOST_NAME = process.env.DB_HOST_NAME || "mydb";

export const PAGINATION_FIELDS = ["page", "limit"];
export const QUERY_FIELDS = ["companyName", "location", "contract"];
