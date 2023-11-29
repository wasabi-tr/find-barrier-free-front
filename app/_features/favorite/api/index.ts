import { authHeaderServerComponents } from '@/app/_components/functional/authHeader'
import { useSession } from 'next-auth/react'

export const registerFavorite = async (factoryId: string) => {
  const { data } = useSession()
  const userId = data?.user?.id
  if (!userId) return

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favorite`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, factoryId }),
  })

  console.log(res)

  return await res.json()
}
export const getFavorite = async (userId: string, factoryId: string) => {
  const authorization = authHeaderServerComponents()

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/favorite?useId=${userId}&factoryId=${factoryId}`,
    {
      credentials: 'include',
      headers: { ...authorization },
    }
  )
  console.log('---------------')
  console.log(res)
  console.log('---------------')

  if (!res.ok) return

  return await res.json()
}
