import { Review } from '@/app/_common/types'

export const getReviewsByUserId = async (userId: string): Promise<Review[]> => {
  try {
    const res = await fetch(`${process.env.API_URL}/review/user/${userId}`)
    const reviews = await res.json()
    return reviews
  } catch (error: any) {
    throw new Error(error)
  }
}
