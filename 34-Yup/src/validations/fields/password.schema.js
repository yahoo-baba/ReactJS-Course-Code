import * as yup from 'yup';

export const passwordSchema = yup
                     .string()
                     .min(6, "Minimum 6 characters")
                     .matches(/[A-Z]/, "At least on uppercase letter")
                     .matches(/[0-9]/, "At least one number")
                     .required("Password is required");