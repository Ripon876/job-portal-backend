import { catchAsync } from "@shared/catchAsync";
import * as authservices from "@modules/auth/auth.services";

export const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const token = await authservices.loginUser(email, password);

  res.cookie("auth-token", token);
  res.status(200).json({
    status: "success",
    message: "Login successfull",
    token,
  });
});

export const signup = catchAsync(async (req, res) => {
  const { name, email, password } = req.body;
  await authservices.signupUser(name, email, password);

  res.status(201).json({
    status: "success",
    message: "Signup successfull",
  });
});

export const logout = catchAsync(async (req, res) => {
  res.clearCookie("auth-token");
  res.status(200).json({
    status: "success",
    message: "Logout successfull",
  });
});
