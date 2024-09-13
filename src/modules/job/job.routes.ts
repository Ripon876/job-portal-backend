import { Router } from "express";
import * as jobControllers from "./job.controllers";
import { isAuthenticated } from "@middlewares/authenticationMiddleware";
import { isAdmin } from "@middlewares/isAdmin";
import { isUser } from "@middlewares/isUser";

const router: Router = Router();

// Routes for user
router.get("/", isAuthenticated, isUser, jobControllers.getJobs);
router.post("/:id/apply", isAuthenticated, isUser, jobControllers.applyForJob);
router.get(
  "/applied",
  isAuthenticated,
  isUser,
  jobControllers.getAppliedJobsByUser
);

// Routes for admin
router
  .route("/admin")
  .all(isAuthenticated, isAdmin)
  .post(jobControllers.createJob)
  .get(jobControllers.getJobsByAdmin);

router
  .route("/:id")
  .all(isAuthenticated, isAdmin)
  .get(jobControllers.getJobById)
  .put(jobControllers.updateJob)
  .delete(jobControllers.deleteJob);

export default router;
