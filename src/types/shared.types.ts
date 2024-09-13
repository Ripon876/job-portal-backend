import { Request } from "express";

export type IUser = {
  _id: string;
  email: string;
  role: "user" | "admin";
};

export type IRequest = Request & {
  user?: IUser;
};
