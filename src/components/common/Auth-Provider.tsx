"use client"

import React from 'react'
import { CommonPropsType } from "@/lib/types/Common"
import { SessionProvider } from 'next-auth/react'


const AuthProvider: React.FC<CommonPropsType> = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthProvider