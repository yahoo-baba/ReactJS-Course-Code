import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import {registerSchema } from "./schema"

function Form() {
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm({
      resolver: yupResolver(registerSchema)
   });

   const onSubmit = data => {
      console.log(data)
   }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} placeholder='Name' />
      <p className='error'>{errors.name?.message}</p>

      <input type="number" {...register("age")} placeholder='Age' />
      <p className='error'>{errors.age?.message}</p>

      <input type="email" {...register("email")} placeholder='Email' />
      <p className='error'>{errors.email?.message}</p>

      <input type="password" {...register("password")} placeholder='Password' />
      <p className='error'>{errors.password?.message}</p>

      <input type="password" {...register("confirmPassword")} placeholder='Confirm Password' />
      <p className='error'>{errors.confirmPassword?.message}</p>

      <label>Skills: </label>
      <input type="checkbox" value="React" {...register("skills")} />React
      <input type="checkbox" value="nodejs" {...register("skills")} />NodeJS
      <input type="checkbox" value="javascript" {...register("skills")} />JavaScript
      <p className='error'>{errors.skills?.message}</p>

      <button type='submit'>Register</button>
    </form>
  )
}

export default Form