'use client'
import { LoginSchemaType, loginSchema } from '@/app/_common/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { login, signup } from '../api'

type Props = {
  isRegister?: boolean
}
const AuthForm: FC<Props> = ({ isRegister = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  })
  const onSubmit = async (data: LoginSchemaType) => {
    if (isRegister) {
      await signup(data)
    }
    await login(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <label htmlFor="email">メールアドレス</label>
        <input type="email" id="email" {...register('email')} />
        <p>{errors.email?.message}</p>
      </div>
      <div className="">
        <label htmlFor="password">パスワード</label>
        <input type="password" id="password" {...register('password')} />
        <p>{errors.password?.message}</p>
      </div>
      <div className="">
        <button>{isRegister ? '新規登録する' : 'ログインする'}</button>
      </div>
    </form>
  )
}

export default AuthForm
