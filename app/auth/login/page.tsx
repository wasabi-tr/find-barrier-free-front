'use client'
import Container from '@/app/_components/layouts/container'
import AuthForm from '@/app/_features/auth/components/form'
import { cookies } from 'next/headers'
import { useSession, signIn, signOut } from 'next-auth/react'

const AuthLogin = () => {
  const { data: session } = useSession()
  console.log(session)

  return (
    <Container>
      <>
        {
          // セッションがある場合、ログアウトを表示
          session && (
            <div>
              <h1>ようこそ, {session.user && session.user.email}</h1>
              <button onClick={() => signOut()}>ログアウト</button>
            </div>
          )
        }
        {
          // セッションがない場合、ログインを表示
          // ログインボタンを押すと、ログインページに遷移する
          !session && (
            <div>
              <p>ログインしていません</p>
              <button onClick={() => signIn('google', {}, { prompt: 'login' })}>
                Googleでログイン
              </button>
            </div>
          )
        }
      </>
    </Container>
  )
}

export default AuthLogin
