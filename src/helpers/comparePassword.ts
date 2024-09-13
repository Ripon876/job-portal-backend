import bcrypt from "bcrypt";

export const comparePassword = (
  givenPassword: string,
  savedPassword: string
) => {
  return bcrypt.compare(givenPassword, savedPassword);
};
