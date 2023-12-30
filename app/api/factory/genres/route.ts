import { getGenres } from '@/app/_features/factory/api/getGenres'

export async function GET(request: Request) {
  const res = await getGenres()
  console.log(res)

  return Response.json(res)
}
