import { Request } from "express";
import { Types } from "mongoose";

export type IUser = {
  _id: string;
  email: string;
  role: "user" | "admin";
};

export type IRequest = Request & {
  user?: IUser;
};

export type ObjectId = Types.ObjectId;
