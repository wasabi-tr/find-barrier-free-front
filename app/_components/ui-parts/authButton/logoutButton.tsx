'use client'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { signOut } from 'next-auth/react'
import React from 'react'

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className={`flex items-center gap-2 py-5 px-3 rounded-md transition w-full hover:bg-color-main-200`}
    >
      <span>
        <ArrowRightOnRectangleIcon className={`w-6 h-6 text-color-main-800 `} />
      </span>
      ログアウト
    </button>
  )
}

export default LogoutButton
