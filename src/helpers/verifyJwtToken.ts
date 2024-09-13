import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@constants/appContants";
import ApiError from "@utils/ApiError";

export const verifyJwtToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new ApiError(401, "Invalid token");
  }
};
