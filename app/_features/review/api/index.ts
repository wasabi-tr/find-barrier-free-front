import { cookies } from 'next/headers'
import { EditedReview, Review } from '@/app/_common/types'

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
export const getReviewsByUserId = async (userId: string): Promise<Review[]> => {
  try {
    const res = await fetch(`${process.env.API_URL}/review/user/${userId}`)
    const reviews = await res.json()
    return reviews
  } catch (error: any) {
    throw new Error(error)
  }
}
export const getReviewsByUserIdAndFactoryId = async ({
  userId,
  factoryId,
}: {
  userId: string
  factoryId: string
}): Promise<Review> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/review/user-and-factory/?userId=${userId}&factoryId=${factoryId}`
    )

    const reviews = await res.json()
    return reviews
  } catch (error: any) {
    throw new Error(error)
  }
}

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
    if (res.status === 403) {
      throw new Error('すでにこの施設にレビューを登録しています。')
    }

    const review = await res.json()

    return review
  } catch (error: any) {
    throw new Error(error)
  }
}
