"use client"

import login from '@/actions/auth/login'
import ThemeSwitcher from '@/components/common/ThemeSwitcher';
import React, { useState } from 'react'
import { FiEye } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { GoEyeClosed, GoEye } from 'react-icons/go';

const Login = () => {

  const [showPassword, setShowPassword] = useState<boolean>(false)

  function clickHandler() {
    setShowPassword((prev)=> !prev)
  }



  return (
    <div className='w-[98%] sm:w-[400px] tracking-widest text-lg space-y-8'>
      <h1 className='text-center font-medium text-3xl mb-10 cursor-pointer'>ℝ𝕙𝕪𝕥𝕙𝕞𝕔𝕙𝕒𝕥</h1>
      <form action={login} className='space-y-10'>
        <div className='space-y-3'>
          <div className='w-full space-y-2'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' className='bg-softWhite dark:bg-softBlack w-full p-3 rounded-lg shadow-md outline-none dark:text-softWhite text-softBlack text-sm' required={true} />
          </div>
          <div className='w-full space-y-2 relative'>
            <label htmlFor='password'>Password</label>
            <input type={showPassword ? 'text' : 'password'} name='password' className='bg-softWhite dark:bg-softBlack w-full p-3 rounded-lg shadow-md outline-none dark:text-softWhite text-softBlack text-sm' required={true} />
            <span className='absolute right-3 bottom-3' onClick={clickHandler}>
              {
                showPassword ? <GoEyeClosed size={20} /> : <GoEye size={20} />
              }
            </span>
          </div>
        </div>
        <button type='submit' className='bg-richBlue w-full py-3 rounded-2xl text-center shadow-sm'>Login</button>
      </form>
      <div className='space-y-5'>
        <p className='text-center text-sm opacity-70'>Or Login with</p>
        <div

          className='bg-softWhite dark:bg-softBlack w-full cursor-pointer rounded-2xl flex gap-4 justify-center items-center p-3'
        >
          <span><FcGoogle size={25} /></span> Log in with Google
        </div>
        <p className='text-center text-sm opacity-70'>Don't have an account? <Link href="/signup" className='text-richBlue'>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login