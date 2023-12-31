import { authHeaderServerComponents } from '@/app/_components/functional/authHeader'

type Props = {
  method: 'POST' | 'DELETE'
  userId: string
  factoryId: string
}
export const switchFavorite = async ({ method, userId, factoryId }: Props) => {
  const authorization = authHeaderServerComponents()

  const res = await fetch(`${process.env.API_URL}/favorite`, {
    method,
    headers: { ...authorization },
    body: JSON.stringify({ userId, factoryId }),
  })
  if (!res.ok) return
  return await res.json()
}
export const getFavorite = async (userId: string, factoryId: string) => {
  const authorization = authHeaderServerComponents()

  const res = await fetch(
    `${process.env.API_URL}/favorite?useId=${userId}&factoryId=${factoryId}`,
    {
      headers: { ...authorization },
    }
  )
  if (!res.ok) return
  return await res.json()
}
export const getAllFavoriteByUserId = async (userId: string) => {
  const authorization = authHeaderServerComponents()

  const res = await fetch(
    `${process.env.API_URL}/favorite/user/?useId=${userId}`,
    {
      headers: { ...authorization },
    }
  )
  if (!res.ok) return
  return await res.json()
}
