'use client'
import { useEffect } from 'react'
import Container from '../_components/layouts/container'

const MyPage = () => {
  const signIn = async () => {
    const email = 'user@test.com'
    const password = 'user'

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'csrf-token': 'CNcBzNp4-Vx2q9lzt7K40NpTpC_4H85xzYZg',
      },
      body: JSON.stringify({ email, password }),
    })
    console.log(res)

    const signupRes = await res.json()
    console.log(signupRes)
  }

  return (
    <Container>
      <button onClick={signIn}>送信テスト</button>
    </Container>
  )
}

export default MyPage
