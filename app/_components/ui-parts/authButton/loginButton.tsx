'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

const LoginButton = () => {
  return <button onClick={() => signIn('google')}>ログイン</button>
}

export default LoginButton
