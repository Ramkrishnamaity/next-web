"use client"

import {login} from '@/actions/auth/index'
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { GoEyeClosed, GoEye } from 'react-icons/go';
import { ImSpinner9 } from "react-icons/im";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';


const Login = () => {

  const router = useRouter()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [disable, setDisable] = useState<boolean>(false)

  function clickHandler() {
    setShowPassword((prev) => !prev)
  }

  async function loginHandler(formData: FormData) {
    try {
      setDisable(true)

      const email = formData.get("email") as string
      const password = formData.get("password") as string

      const responce = await login({ email, password })

      if(responce.status) {
        setDisable(false)
        formData.set("email", "")
        formData.set("password", "")
        toast.success(responce.message)
        router.push('/dashboard')
      } else {
        toast.error(responce.message)
        formData.set("email", "")
        formData.set("password", "")
        setDisable(false)
      }
    } catch (error) {
      setDisable(false)
      formData.set("email", "")
      formData.set("password", "")
      console.log(error)
    }
  }

  return (
    <div className='w-[98%] sm:w-[400px] tracking-widest text-lg space-y-8'>
      <h1 className='text-center font-medium text-3xl mb-10 cursor-pointer'>ℝ𝕙𝕪𝕥𝕙𝕞𝕔𝕙𝕒𝕥</h1>
      <form action={loginHandler} className='space-y-10'>
        <div className='space-y-3'>
          <div className='w-full space-y-2'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' readOnly={disable} className='bg-softWhite dark:bg-softBlack w-full p-3 rounded-lg shadow-md outline-none dark:text-softWhite text-softBlack text-sm tracking-wider' required={true} />
          </div>
          <div className='w-full space-y-2 relative'>
            <label htmlFor='password'>Password</label>
            <input type={showPassword ? 'text' : 'password'} name='password' readOnly={disable} className='bg-softWhite dark:bg-softBlack w-full p-3 rounded-lg shadow-md outline-none dark:text-softWhite text-softBlack text-sm tracking-wider' required={true} />
            <span className='absolute right-3 bottom-3' onClick={clickHandler}>
              {
                showPassword ? <GoEyeClosed size={20} /> : <GoEye size={20} />
              }
            </span>
          </div>
        </div>
        <button type='submit' disabled={disable} className='bg-richBlue w-full py-3 rounded-2xl shadow-sm flex gap-4 justify-center items-center'>
          <span>
            {
              disable && <ImSpinner9 size={20} className='animate-spin' />
            }
          </span>
          Login
        </button>
      </form>
      <div className='space-y-5'>
        <p className='text-center text-sm opacity-70'>Or Login with</p>
        <button
          disabled={disable}
          className='bg-softWhite dark:bg-softBlack w-full rounded-2xl flex gap-4 justify-center items-center p-3'
        >
          <span><FcGoogle size={25} /></span> Log in with Google
        </button>
        <p className='text-center text-sm opacity-70'>Don't have an account? <Link href="/signup" className='text-richBlue'>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login