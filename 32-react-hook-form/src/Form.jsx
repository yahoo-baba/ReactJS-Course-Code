import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools';
import { useEffect } from "react";

function Form() {
   const { register, handleSubmit, control, 
      formState, watch, getValues, setValue, reset, trigger  } = useForm({
      defaultValues:{
         name: "",
         email: "",
         age: 18,
         social: {
            facebook:"",
            twitter: ""
         },
         phonenumber: ["",""],
         dob: new Date()
      },
      // mode: "all"
   });
   // const { register, handleSubmit, control, formState  } = useForm({
   //    defaultValues: async () => {
   //       const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
   //       const data = await response.json();
   //       return {
   //          name: data.name,
   //          email: data.email,
   //          age: 18
   //       }
   //    }
   // });
   const { errors, dirtyFields, 
      touchedFields, isDirty, isValid, 
      isSubmitting, isSubmitted, isSubmitSuccessful, submitCount } = formState;

   // console.log(formState)
   // console.log({dirtyFields, touchedFields, isDirty})
   console.log({isSubmitting, isSubmitted, isSubmitSuccessful, submitCount})

   const onSubmit = (data) => {
      console.log(data)
   }

   // const watchForm = watch()

   // useEffect(() => {
   //    console.log(watchForm)
   // },[watchForm])

   const getFormValue = () =>{
      const values = getValues(["name","email"])
      console.log(values)
   }

   const setFormValue = () =>{
      setValue("name", "Testing", {
         shouldValidate:true,
         shouldTouch:true,
         shouldDirty:true
      })
   }

   const onError = (errors) => {
      console.log("Errors :", errors)
   }

   useEffect(() => {
      if(isSubmitSuccessful){
         reset()
      }
   },[isSubmitSuccessful])

  return (
    <div>
      {/* <p>{JSON.stringify(watchForm)}</p> */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
         <label htmlFor="name">Name</label><br />
         <input type="text" id="name" 
            {...register("name", {
               required: 'Name is required.'
            })}
         />
         {errors.name && <p className="error">{errors.name?.message}</p>}
         <br /><br />
         <label htmlFor="email">Email</label><br />
         <input type="email" id="email" 
         {...register("email" , {
               // disabled: watch("name") === "",
               required: 'Email is required.',
               pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Invalid email address'
               },
               validate: {
                  notAdminEmail: (value) => {
                     return (
                        value !== "admin@example.com" || "Enter a different email address"
                     )
                  },
                  notBlacklistedEmail: (value) => {
                     return (
                       !value.endsWith("@blacklisted.com") || "This domain is not allowed."
                     )
                  },
                  availableEmail: async (value) => {
                     const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`)
                     const data = await response.json()
                     return data.length === 0 || "Email already exists.";
                  }
               }
            })} />
            {errors.email && <p className="error">{errors.email?.message}</p>}
         <br /><br />
         <label htmlFor="age">Age</label><br />
         <input type="number" id="age" 
         {...register("age" , 
            {
               valueAsNumber: true,
               required: 'Age is required.',
               min:{
                  value:18,
                  message: 'Age must be at least 18'
               },
               max:{
                  value:25,
                  message: 'Age must be at most 25'
               }
            })} />
            {errors.age && <p className="error">{errors.age?.message}</p>}

         <br /><br />
         <label htmlFor="country">Country</label> <br />
         <select id="country" {...register("country")}>
            <option value="">Select Country</option>
            <option value="india">India</option>
            <option value="pakistan">Pakistan</option>
            <option value="bangladesh">Bangladesh</option>
         </select>
         <br /><br />

         <label htmlFor="gender">Gender</label> <br />
         <label htmlFor="gender">
            <input type="radio" value="male" {...register("gender", {required:true})} />
            Male
         </label>
         <label htmlFor="gender">
            <input type="radio" value="female" {...register("gender")} />
            Female
         </label>
         {errors.gender && <p className="error">Gender is required.</p>}
         <br /><br />

         <label htmlFor="skills">Skills</label> <br />
         <label htmlFor="skills">
            <input type="checkbox" value="react" {...register("skills")} />
            React
         </label>
         <label htmlFor="skills">
            <input type="checkbox" value="node" {...register("skills")} />
            NodeJS
         </label>
         <label htmlFor="skills">
            <input type="checkbox" value="mongodb" {...register("skills")} />
            MongoDB
         </label>
         <br /><br />

         <label htmlFor="dob">DOB</label><br />
         <input type="date" id="dob" 
         {...register("dob", {
            valueAsDate: true
         })} />
         <br /><br />      

         <label htmlFor="facebook">Facebook</label><br />
         <input type="text" id="facebook" 
         {...register("social.facebook")} />
          <br /><br />

         <label htmlFor="twitter">Facebook</label><br />
         <input type="text" id="twitter" 
         {...register("social.twitter")} />
         <br /><br />

         <label htmlFor="primary-phonenumber">Primary Phone Number</label><br />
         <input type="text" id="primary-phonenumber" 
         {...register("phonenumber.0")} />
         <br /><br />

         <label htmlFor="secondary-phonenumber">Secondary Phone Number</label><br />
         <input type="text" id="secondary-phonenumber" 
         {...register("phonenumber.1")} />
         <br /><br />   

         {/* <button type="submit" disabled={!isValid}>Submit</button> */}
         <button type="submit">Submit</button>
         <button type="button" onClick={getFormValue}>Get Values</button>
         <button type="button" onClick={setFormValue}>Set Value</button>
         <button type="button" onClick={() => trigger("name")}>Validate</button>
         <br />
         <button type="button" onClick={() => reset({
            name: "Yahubaba",
            email: "yahubaba@gmail.com"
         })}>Reset</button>
      </form>
      <DevTool control={control} placement="top-left" />
    </div>
  )
}

export default Form