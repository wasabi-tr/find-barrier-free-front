'use client'
import React, { ReactNode, useEffect } from 'react'

const AuthProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const getCsrfToken = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/csrf`, {
        credentials: 'include',
        // 他の設定...
      })
      const data = await res.json()
      console.log(data)
    }
    getCsrfToken()
  }, [])
  return <div>{children}</div>
}

export default AuthProvider
