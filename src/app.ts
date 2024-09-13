import { config } from "dotenv";
config();

import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { FRONTEND_BASE } from "@configs/appConfigs";
import { applyRoutes } from "./routes";

const app: Express = express();

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

applyRoutes(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
