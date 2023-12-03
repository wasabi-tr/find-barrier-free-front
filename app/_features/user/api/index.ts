import { authHeaderServerComponents } from '@/app/_components/functional/authHeader'
import { UserCredential } from 'firebase/auth'
const authorization = authHeaderServerComponents()
export const getUser = async (id: string) => {
  //認証の処理を追加する
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`, {
    headers: { ...authorization },
  })
  const user = await res.json()
  return user
}

export const createUser = async (userCredential: UserCredential) => {
  const { user } = userCredential
  const id = user.uid
  const name = user.email

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, nickName: name }),
  })

  const responseUser = await res.json()
  return responseUser
}
