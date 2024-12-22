import * as Yup from "yup";

export const loginUserValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is a required field")
    .trim()
    .max(55, "Email must be at max 55 characters")
    .lowercase(),

  password: Yup.string()
    .required("Password is a required field")
    .max(20, "Password must be at max 20 characters"),
});
