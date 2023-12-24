'use client'
import { useMutateAuth } from '@/app/_features/auth/hooks/useMutateAuth'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const GoogleLoginButton = () => {
  const { googleLogin } = useMutateAuth()
  return (
    <button
      className={`relative px-4 py-3 border  rounded-lg transition border-color-main-400 hover:bg-color-main-200`}
      onClick={() => googleLogin()}
    >
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
        <Image alt="" src="/icons/googleIcon.svg" width={20} height={20} />
      </span>
      Googleアカウントでログイン
    </button>
  )
}

export default GoogleLoginButton
