import ApiError from "@utils/ApiError";
import { NextFunction, Response } from "express";
import { IRequest } from "types/shared.types";

// Middleware to check if user is a user
export const isUser = (req: IRequest, res: Response, next: NextFunction) => {
  if (req.user?.role !== "user") {
    throw new ApiError(403, "Forbidden");
  }

  next();
};
