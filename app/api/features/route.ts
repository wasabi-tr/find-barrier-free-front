import { getFeatures } from '@/app/_features/factory/api/getFeatures'

export async function GET(request: Request) {
  try {
    const res = await getFeatures()
    return Response.json(res)
  } catch (error: any) {
    throw new Error(error)
  }
}
