import { ADMIN_DOMAIN } from "@constants/appContants";
import User from "./user.model";

export const createUser = async (user: any) => {
  const domain = user.email.split("@")[1];
  const role = domain === ADMIN_DOMAIN ? "admin" : "user";

  const createdUser = await User.create({
    ...user,
    role,
  });

  return createdUser;
};
