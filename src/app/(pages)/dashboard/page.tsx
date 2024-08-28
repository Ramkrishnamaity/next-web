"use client"

import { logout } from '@/actions/auth'
import ThemeSwitcher from '@/components/common/ThemeSwitcher'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

const Dashboard = () => {

  const router = useRouter()

  async function logoutHandler() {
    try {
      if(await logout()) {
        toast.success("Logout Successfully.")
        router.push('/login')
      }
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className='text-center tracking-widest text-2xl space-y-10'>
       <ThemeSwitcher />
       <p>Dashboard</p>
       <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Dashboard