import { Document, Types } from "mongoose";

export interface IJob extends Document {
  companyName: string;
  position: string;
  location: string;
  contract: "Full time" | "Part time";
  postedBy?: Types.ObjectId;
}
