import { comparePassword } from "@helpers/comparePassword";
import { createJwtToken } from "@helpers/createJwtToken";
import User from "@modules/user/user.model";
import * as userServices from "@modules/user/user.services";
import ApiError from "@utils/ApiError";

export const loginUser = async (email: string, password: string) => {
  const user = await User.isUserExist(email);

  if (!user) {
    throw new ApiError(404, "No user found with the provided email address.");
  }

  const isPwdMatched = await comparePassword(password, user.password);

  if (!isPwdMatched) {
    throw new ApiError(401, "The password you entered is incorrect.");
  }

  const token = createJwtToken({
    _id: user._id,
    email: user.email,
    role: user.role,
  });

  return token;
};

export const signupUser = async (
  name: string,
  email: string,
  password: string
) => {
  const isUserExist = await User.isUserExist(email);

  if (isUserExist) {
    throw new ApiError(409, "User already exists with this email.");
  }

  const user = await userServices.createUser({ name, email, password });

  return user;
};
