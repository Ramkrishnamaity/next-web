"use client"

import React from 'react'
import { useTheme } from 'next-themes'
import { MdLightMode, MdDarkMode } from "react-icons/md";


const ThemeSwitcher: React.FC = () => {

  const { theme, setTheme } = useTheme()

  function clickHandler() {
    theme === 'dark' ? setTheme("light") : setTheme("dark");
  }

  return (
    <button
      className='p-5'
      onClick={clickHandler}
    >
      {
        theme == 'dark' ? <MdLightMode size={25} />: <MdDarkMode size={25} /> 
      }
    </button>
  )
}

export default ThemeSwitcher