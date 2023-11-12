import Container from '../_components/layouts/container'

const Auth = () => {
  const getCsrfToken = async () => {
    'use server'

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/csrf`, {
      credentials: 'include',
      // 他の設定...
    })
    const data = await res.json()
    console.log(data)
  }

  return (
    <Container>
      <form action={getCsrfToken}>
        <div className="">
          <label htmlFor="email">メールアドレス</label>
          <input type="email" id="email" />
        </div>
        <div className="">
          <label htmlFor="password">パスワード</label>
          <input type="password" id="password" />
        </div>
        <div className="">
          <button>サインイン</button>
        </div>
      </form>
    </Container>
  )
}

export default Auth
