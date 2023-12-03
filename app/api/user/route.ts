import { getUser } from '@/app/_features/user/api'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  console.log(searchParams)

  const id = searchParams.get('id')
  if (!id) return
  const res = await getUser(id)
  console.log(res)
  return
  const data = await res.json()
  return Response.json({ data })
}
