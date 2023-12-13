import { UserCredential } from 'firebase/auth'

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
