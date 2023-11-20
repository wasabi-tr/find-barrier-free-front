import Container from '@/app/_components/layouts/container'
import AuthForm from '@/app/_features/auth/components/form'
import { cookies } from 'next/headers'
import { useSession, signIn, signOut } from 'next-auth/react'
import { options } from '@/app/options'
import { getServerSession } from 'next-auth' // 2⃣

const AuthLogin = async () => {
  const session = await getServerSession(options) // 3⃣
  const user = session?.user
  console.log(user)

  return (
    <Container>
      <>
        <p>Profile Page</p>
        {!user ? (
          <p>ユーザー情報が取得できていません。。。</p>
        ) : (
          <>
            <div>
              <img
                src={user.image ? user.image : '/images/default.png'}
                className="max-h-36"
                alt={`profile photo of ${user.name}`}
              />
            </div>
            <div className="mt-8">
              <p className="mb-3">Name: {user.name}</p>
              <p className="mb-3">Email: {user.email}</p>
            </div>
          </>
        )}
      </>
    </Container>
  )
}

export default AuthLogin
