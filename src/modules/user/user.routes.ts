import { Router } from "express";
import * as userControllers from "./user.controllers";
import { isAuthenticated } from "@middlewares/authenticationMiddleware";

const router: Router = Router();

router.route("/me").get(isAuthenticated, userControllers.me);

export default router;
