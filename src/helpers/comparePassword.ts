import bcrypt from "bcrypt";

// Helper function to compare password
export const comparePassword = (
  givenPassword: string,
  savedPassword: string
) => {
  return bcrypt.compare(givenPassword, savedPassword);
};
