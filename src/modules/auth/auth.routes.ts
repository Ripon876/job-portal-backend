import { Router } from "express";
import * as authControllers from "./auth.controllers";
import * as authValidations from "./auth.validations";
import { validate } from "@middlewares/validationMiddleware";

const router: Router = Router();

router
  .route("/login")
  .post(validate(authValidations.login), authControllers.login);
router
  .route("/signup")
  .post(validate(authValidations.signup), authControllers.signup);

export default router;
