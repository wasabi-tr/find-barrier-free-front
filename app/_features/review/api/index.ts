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
}): Promise<Review | { message: string }> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/review/user-and-factory/?userId=${userId}&factoryId=${factoryId}`
    )
    if (res.status === 404) {
      return { message: '投稿されているレビューはありません。' }
    }

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

    const review = await res.json()

    return review
  } catch (error: any) {
    throw new Error(error)
  }
}
export const deleteReview = async ({
  userId,
  id,
}: {
  userId: string
  id: string
}) => {
  try {
    const cookieStore = cookies()
    const theme = cookieStore.get('next-auth.session-token')
    const bearer = theme?.value

    const res = await fetch(`${process.env.API_URL}/review/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearer}`,
      },
      body: JSON.stringify({ userId, id }),
    })
    if (!res.ok) {
      throw new Error('削除に失敗しました。')
    }
    return { message: '削除しました。' }
  } catch (error: any) {
    throw new Error(error)
  }
}
