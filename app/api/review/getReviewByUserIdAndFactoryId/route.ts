import { getReviewsByUserIdAndFactoryId } from '@/app/_features/review/api/getReviewsByUserIdAndFactoryId'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')
  const factoryId = searchParams.get('factoryId')
  if (!userId || !factoryId) {
    return Response.json({
      status: 403,
      message: 'userId and factoryId are required',
    })
  }
  try {
    const res = await getReviewsByUserIdAndFactoryId({ userId, factoryId })

    return Response.json(res)
  } catch (error: any) {
    throw new Error(error)
  }
}
