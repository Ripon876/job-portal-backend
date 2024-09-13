import { param } from "express-validator";
import { validate } from "@middlewares/validationMiddleware";

const validateId = (...params: string[]) => {
  const validations = [...params].map((paramName) => {
    return param(paramName).isMongoId().withMessage("Invalid document Id");
  });

  return validate(validations);
};
