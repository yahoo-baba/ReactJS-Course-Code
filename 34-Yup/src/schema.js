import * as yup from 'yup';

export const registerSchema = yup.object({
   name: yup
         .string()
         .required("Name is required.")
         .test(
            "no-admin",
            "Admin not allowed",
            value => value !== "admin"
         )
         .trim()
         .lowercase(),
   email: yup
         .string()
         .when("age", {
            is: age => age >= 25,
            then: schema =>
               schema
                  .email("Invalid Email")
                  .required("Email is required if age is 25 or above"),
            otherwise  :   schema => schema.notRequired(),  
         })
         // .test(
         //    "check-email",
         //    "Email already exists",
         //    async value => {
         //       const res = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`)
         //       const data = await res.json();
         //       return data.length === 0
         //    }
         //)
         ,
   password: yup
         .string()
         .min(6, "Password must be 6 characters")
         .required(),
   confirmPassword: yup
         .string()
         .oneOf([yup.ref("password")], "Password must match")
         .required(),
   age: yup
         .number()
         .min(18, "Age must be at least 18")      
         .required("Age is required"),
   skills: yup
         .array()
         .of(yup.string())
         .min(2, "Select at least 2 Skills")      
         .max(3, "You can select at most 3 skills")
})