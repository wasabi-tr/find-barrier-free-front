import { getGenres } from '@/app/_features/factory/api/getGenres'

export async function GET(request: Request) {
  try {
    const res = await getGenres()
    return Response.json(res)
  } catch (error: any) {
    throw new Error(error)
  }
}
