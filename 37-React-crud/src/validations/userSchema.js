import * as yup from "yup";

export const userSchema = yup.object({
  name: yup.string().required("Name is required."),
  username: yup.string().required("UserName is required."),
  email: yup.string().email("Invalid Email").required("Email is required."),
  age: yup.number().required().positive().integer(),
});
