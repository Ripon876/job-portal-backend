import { verifyJwtToken } from "@helpers/verifyJwtToken";
import { NextFunction, Response } from "express";
import { IRequest, IUser } from "types/shared.types";

// Middleware to check if user is authenticated
export const isAuthenticated = (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["auth-token"] || "";
  if (!token) return res.status(401).send("Unauthorized");

  const user = verifyJwtToken(token);

  req.user = user as IUser;
  next();
};
