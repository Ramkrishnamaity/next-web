"use client"

import React from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitcher: React.FC = () => {
  
  const {theme, setTheme} = useTheme()

  return (
    <div className='flex gap-3'>
      <p>Current Theme is {theme}</p>
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  )
}

export default ThemeSwitcher