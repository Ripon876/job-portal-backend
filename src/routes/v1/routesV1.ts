import { Router } from "express";

const router: Router = Router();

router.get("/", (req, res) => {
  res.send("Hello World! from v1");
});

export default router;
