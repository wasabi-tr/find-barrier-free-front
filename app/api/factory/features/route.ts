import { getFeatures } from '@/app/_features/factory/api/getFeatures'

export async function GET(request: Request) {
  const res = await getFeatures()

  return Response.json(res)
}
