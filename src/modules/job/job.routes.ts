import { Router } from "express";
import * as jobControllers from "./job.controllers";
import { isAuthenticated } from "@middlewares/authenticationMiddleware";
import { isAdmin } from "@middlewares/isAdmin";
import { isUser } from "@middlewares/isUser";
import { validateId } from "@shared/validations";

const router: Router = Router();

router.get("/", isAuthenticated, jobControllers.getJobs);

// User routes
router.post(
  "/:id/apply",
  validateId("id"),
  isAuthenticated,
  isUser,
  jobControllers.applyForJob
);

// Admin routes
router.post("/admin", isAuthenticated, isAdmin, jobControllers.createJob);
router
  .route("/:id")
  .all(validateId("id"), isAuthenticated, isAdmin)
  .get(jobControllers.getJobById)
  .put(jobControllers.updateJob)
  .delete(jobControllers.deleteJob);

export default router;
