import { Router } from "express";
import authRoutes from "@modules/auth/auth.routes";

const router: Router = Router();

const routes = [
  {
    path: "/auth",
    router: authRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.router));

export default router;
