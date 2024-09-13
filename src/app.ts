import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { applyRoutes } from "./routes";
import { FRONTEND_BASE } from "./constants/appContants";
import { connectDB } from "./database";
import ApiError from "@utils/ApiError";

const app: Express = express();

// Apply required middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [FRONTEND_BASE],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);

// Connect to database
connectDB();
// Apply all api routes
applyRoutes(app);

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);

  let statusCode = 500;
  let message = "Internal Server Error";

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode).json({ status: "error", message: message });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
