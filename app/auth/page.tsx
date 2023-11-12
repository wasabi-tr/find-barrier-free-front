import Container from '../_components/layouts/container'
import { cookies } from 'next/headers'

const Auth = () => {
  const signIn = async (data: FormData) => {
    'use server'

    const email = data.get('email') as string
    const password = data.get('password') as string
    const resCsrf = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/csrf`,
      {
        credentials: 'include',
        // 他の設定...
      }
    )
    const csrf = await resCsrf.json()
    console.log(csrf)

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'csrf-token': 'hAdF1z6i-M8WXfncN7AfGaEYwECjcLklotpw',
      },
      body: JSON.stringify({ email, password }),
    })

    const signupRes = await res.json()
    console.log(signupRes)
  }

  return (
    <Container>
      <form action={signIn}>
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
    </Container>
  )
}

export default Auth
