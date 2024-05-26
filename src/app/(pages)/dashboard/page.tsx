import ThemeSwitcher from '@/components/common/ThemeSwitcher'
import React from 'react'

const Dashboard = () => {


  return (
    <div className='text-center tracking-widest text-2xl space-y-10'>
       <ThemeSwitcher />
       <p>Dashboard</p>
    </div>
  )
}

export default Dashboard