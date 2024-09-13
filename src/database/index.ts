import {
  DB_HOST_NAME,
  DB_NAME,
  DB_PASSWORD,
  DB_USER_NAME,
} from "@constants/appContants";
import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(
      `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@${DB_HOST_NAME}/${DB_NAME}?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log(`connected with ${DB_NAME} database 🚀`);
    })
    .catch((err) => {
      console.error("MongoDB connection error: ", err);
    });
};
