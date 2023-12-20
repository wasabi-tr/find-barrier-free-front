import { getReviewsByUserIdAndFactoryId } from '@/app/_features/review/api'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')
  const factoryId = searchParams.get('factoryId')
  // console.log({ userId, factoryId })
  if (userId && factoryId) {
    const res = await getReviewsByUserIdAndFactoryId({ userId, factoryId })

    return Response.json(res)
  }
  return
}
