import { authHeaderServerComponents } from '@/app/_components/functional/authHeader'
import { options } from '@/app/next-auth'
import { getServerSession } from 'next-auth'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const session = await getServerSession(options)
  const authorization = authHeaderServerComponents()
  //認証の処理を追加する
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/${session?.user.id}`,
    {
      headers: { ...authorization },
    }
  )
  if (!res.ok) return

  const user = await res.json()

  return Response.json(user)
}
