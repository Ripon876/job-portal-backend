import { Response, NextFunction } from "express";
import { IRequest } from "types/shared.types";

type RequestHandler = (
  req: IRequest,
  res: Response,
  next: NextFunction
) => Promise<void> | any;

type CatchAsync = (fn: RequestHandler) => RequestHandler;

// Helper function to catch async errors
export const catchAsync: CatchAsync = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    next(error);
  }
};
