import { cookies } from 'next/headers'
import { EditedReview, Review } from '@/app/_common/types'

export const createReview = async (
  reviewData: EditedReview
): Promise<Review[]> => {
  try {
    const cookieStore = cookies()
    const theme = cookieStore.get('next-auth.session-token')
    const bearer = theme?.value

    const res = await fetch(`${process.env.API_URL}/review/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearer}`,
      },
      body: JSON.stringify(reviewData),
    })

    const review = await res.json()

    return review
  } catch (error: any) {
    throw new Error(error)
  }
}
