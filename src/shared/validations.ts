import { param } from "express-validator";
import { validate } from "@middlewares/validationMiddleware";

// Validate document Id in id param
export const validateId = (...params: string[]) => {
  const validations = [...params].map((paramName) => {
    return param(paramName).isMongoId().withMessage("Invalid document Id");
  });

  return validate(validations);
};
