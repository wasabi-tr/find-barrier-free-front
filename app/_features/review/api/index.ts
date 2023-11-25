import { Review } from '@/app/_common/types'

export const getReviewsByFactoryId = async (
  factoryId: string
): Promise<Review[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/review/${factoryId}`
    )
    const reviews = await res.json()
    return reviews
  } catch (error: any) {
    throw new Error(error)
  }
}
export const getReviewsByUserId = async (userId: string): Promise<Review[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/factory`)
    const reviews = await res.json()
    return reviews
  } catch (error: any) {
    throw new Error(error)
  }
}
