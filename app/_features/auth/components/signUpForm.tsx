'use client'
import React from 'react'
import { useMutateAuth } from '../hooks/useMutateAuth'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/outline'
import GoogleLoginButton from '@/app/_components/ui-parts/authButton/googleLoginButton'

const SignUpForm = () => {
  const { email, setEmail, password, setPassword, singUp, error } =
    useMutateAuth()
  return (
    <div className="p-16 rounded-lg shadow-md  bg-white">
      <h2 className="text-center font-semibold">新規会員登録をする</h2>
      {error && (
        <div className="flex items-center gap-4 border-2 border-red-600 rounded-md p-4 mt-4 ">
          <span className="flex items-center justify-center bg-red-600 rounded-full  w-8 h-8">
            <XMarkIcon className="text-white  w-6 h-6" />
          </span>
          <p className="font-semibold">{error}</p>
        </div>
      )}
      <div className="grid gap-10 mt-8">
        <div className="grid gap-2">
          <label htmlFor="email">メールアドレス</label>
          <div className="relative w-full">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="例：furalle@example.com"
              className={`p-4 rounded-lg bg-white w-full border  ${
                error
                  ? 'border-2 border-red-600'
                  : 'border border-color-main-600'
              }`}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <label htmlFor="password">パスワード</label>
          <div className="relative w-full">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="パスワード"
              className={`p-4 rounded-lg bg-white w-full   ${
                error
                  ? 'border-2 border-red-600'
                  : 'border border-color-main-600'
              }`}
            />
          </div>
        </div>

        <button
          type="button"
          className={`px-4 py-3 border  rounded-lg transition border-color-green-700 bg-color-green-700 text-white hover:bg-color-green-800`}
          onClick={() => {
            singUp()
          }}
        >
          会員登録する
        </button>
        <GoogleLoginButton />
        <Link
          href={'/auth/sign-in'}
          className="text-center text-sm text-color-green-600 transition hover:opacity-50"
        >
          ログインはこちら
        </Link>
      </div>
    </div>
  )
}

export default SignUpForm
