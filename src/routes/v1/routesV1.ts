import { Router } from "express";
import authRoutes from "@modules/auth/auth.routes";
import userRoutes from "@modules/user/user.routes";

const router: Router = Router();

const routes = [
  {
    path: "/auth",
    router: authRoutes,
  },
  {
    path: "/user",
    router: userRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.router));

export default router;
