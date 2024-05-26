"use client"

import React, { useEffect, useState } from 'react'
import { CommonPropsType } from '@/lib/types/Common'
import { ThemeProvider } from 'next-themes'


const Provider: React.FC<CommonPropsType> = ({ children }) => {

  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <>{children}</>
    )
  }

  return (
    <ThemeProvider attribute='class'>{children}</ThemeProvider>
  )
}

export default Provider