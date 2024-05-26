"use client"

import login from '@/actions/auth/login'
import React, { useState } from 'react'
import { GoEye, GoEyeClosed } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Link from 'next/link';

const SignUp = () => {

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false)

  function clickHandler() {
    setShowPassword((prev) => !prev)
  }


  return (
    <div className='w-[98%] sm:w-[400px] tracking-widest text-lg space-y-8'>
      <h1 className='text-center font-medium text-3xl mb-10 cursor-pointer'>ℝ𝕙𝕪𝕥𝕙𝕞𝕔𝕙𝕒𝕥</h1>
      <form action={login} className='space-y-10'>
        <div className='space-y-3'>
          <div className='sm:flex-row flex flex-col gap-1'>
            <div className='w-full space-y-2'>
              <label htmlFor='firstName'>First Name</label>
              <input type='text' name='firstName' className='bg-softWhite dark:bg-softBlack w-full p-3 rounded-lg shadow-md outline-none dark:text-softWhite text-softBlack text-sm' required={true} />
            </div>
            <div className='w-full space-y-2'>
              <label htmlFor='lastName'>Last Name</label>
              <input type='text' name='lastName' className='bg-softWhite dark:bg-softBlack w-full p-3 rounded-lg shadow-md outline-none dark:text-softWhite text-softBlack text-sm' required={true} />
            </div>
          </div>
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

          <div className='flex gap-1'>
            <div className='w-full'>
              <label htmlFor='otp'>OTP</label>
              <div className='flex gap-1'>
                <input type='text' name='otp' className='bg-softWhite dark:bg-softBlack w-full p-3 rounded-lg shadow-md outline-none dark:text-softWhite text-softBlack text-sm' required={true} />
                <div className='w-full p-3 flex gap-2 justify-center items-center'>
                  {
                    isOtpSent && <span className='text-[#00FF00]'><IoIosCheckmarkCircle size={25} /></span>
                  }
                  <div className='text-center text-sm cursor-pointer'>
                    {
                      isOtpSent ? "Sent" : "Send Otp"
                    }
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <button type='submit' className='bg-richBlue w-full py-3 rounded-2xl text-center shadow-sm'>Register</button>
      </form>
      <div className='space-y-5'>
        <p className='text-center text-sm opacity-70'>Or Sign up with</p>
        <div

          className='bg-softWhite dark:bg-softBlack w-full cursor-pointer rounded-2xl flex gap-4 justify-center items-center p-3'
        >
          <span><FcGoogle size={25} /></span> Sign up with Google
        </div>
        <p className='text-center text-sm opacity-70'>Already registerd? <Link href="/login" className='text-richBlue'>Log in</Link></p>
      </div>
    </div>
  )

}

export default SignUp