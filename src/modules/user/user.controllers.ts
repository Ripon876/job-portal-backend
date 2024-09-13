import { catchAsync } from "@shared/catchAsync";

export const me = catchAsync(async (req, res) => {
  if (!req.user) return res.status(401).send("Unauthorized");

  res.status(200).json({
    status: "success",
    data: req.user,
  });
});
