import * as yup from 'yup';

export const emailSchema = yup
                           .string()
                           .email("Invalid Email")
                           .required("Email is required")