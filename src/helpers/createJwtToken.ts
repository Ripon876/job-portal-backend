import jwt from "jsonwebtoken";
import { JWT_EXPIRES_IN, JWT_SECRET } from "@constants/appContants";

// Helper function to create jwt token with user data
export const createJwtToken = (payload: any) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};
