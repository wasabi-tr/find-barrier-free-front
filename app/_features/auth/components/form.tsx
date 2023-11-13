'use client'
import { LoginSchemaType } from '@/app/_common/schema'
import React from 'react'
import { useForm } from 'react-hook-form'

const AuthForm = () => {
  const { register, handleSubmit } = useForm<LoginSchemaType>()
  return (
    <form>
      <div className="">
        <label htmlFor="email">メールアドレス</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="">
        <label htmlFor="password">パスワード</label>
        <input type="password" id="password" name="password" />
      </div>
      <div className="">
        <button>サインイン</button>
      </div>
    </form>
  )
}

export default AuthForm
