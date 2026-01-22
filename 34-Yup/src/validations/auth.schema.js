import * as yup from 'yup';
import { emailSchema } from './fields/email.schema';
import { passwordSchema } from './fields/password.schema';

export const loginSchema = yup.object({
   email:emailSchema,
   password: passwordSchema
});

export const registerSchema = yup.object({
   name: yup.string().required("Name is required."),
   email:emailSchema,
   password: passwordSchema,
   confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Password must match")
            .required(),
});