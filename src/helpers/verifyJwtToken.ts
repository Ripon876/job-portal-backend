import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@constants/appContants";
import ApiError from "@utils/ApiError";
import { IUser } from "types/shared.types";

export const verifyJwtToken = (token: string): IUser => {
  try {
    const { _id, email, role } = jwt.verify(token, JWT_SECRET) as IUser;

    return {
      _id,
      email,
      role,
    };
  } catch (error) {
    throw new ApiError(401, "Invalid token");
  }
};
