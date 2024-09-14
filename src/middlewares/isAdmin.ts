import ApiError from "@utils/ApiError";
import { NextFunction, Response } from "express";
import { IRequest } from "types/shared.types";

// Middleware to check if user is an admin
export const isAdmin = (req: IRequest, res: Response, next: NextFunction) => {
  if (req.user?.role !== "admin") {
    throw new ApiError(403, "Forbidden");
  }

  next();
};
