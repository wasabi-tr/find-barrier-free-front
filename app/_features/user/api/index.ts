// 'use server'
import { authHeaderServerComponents } from '@/app/_components/functional/authHeader'
import { UserCredential } from 'firebase/auth'
export const getUser = async (id: string) => {
  // const authorization = authHeaderServerComponents()
  //認証の処理を追加する
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`, {
    // headers: { ...authorization },
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

export const updateUser = async ({
  id,
  nickName,
  description,
  avatarUrl,
}: {
  id: string
  nickName?: string
  description?: string
  avatarUrl?: string
}) => {
  const authorization = authHeaderServerComponents()
  const res = await fetch(`${process.env.API_URL}/user`, {
    method: 'PATCH',
    headers: {
      ...authorization,
    },
    body: JSON.stringify({ id, nickName, description, avatarUrl }),
  })
  if (!res.ok) return

  const responseUser = await res.json()
  return responseUser
}
