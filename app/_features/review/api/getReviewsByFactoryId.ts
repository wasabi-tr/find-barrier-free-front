import { Review } from '@/app/_common/types'

export const getReviewsByFactoryId = async (
  factoryId: string
): Promise<Review[]> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/review/factory/${factoryId}`
    )
    const reviews = await res.json()
    return reviews
  } catch (error: any) {
    throw new Error(error)
  }
}
