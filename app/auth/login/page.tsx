'use client'

import Container from '@/app/_components/layouts/container'
import { options } from '@/app/options'
import { getServerSession } from 'next-auth' // 2⃣
import { NextApiRequest } from 'next'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useMutateAuth } from '@/app/_features/auth/hooks/useMutateAuth'

const AuthLogin = (req: NextApiRequest) => {
  const session = useSession()
  console.log(session)

  // 3⃣
  // const user = session?.user
  // console.log(user
  const { email, setEmail, password, setPassword, signIn, singUp, message } =
    useMutateAuth()
  console.log('render')

  return (
    <Container>
      <div>
        <p>{message}</p>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="メールアドレス"
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="パスワード"
        />
        <button
          type="button"
          onClick={() => {
            signIn()
          }}
        >
          ログイン
        </button>
        <button
          type="button"
          onClick={() => {
            singUp()
          }}
        >
          サインアップ
        </button>
      </div>
    </Container>
  )
}

export default AuthLogin
