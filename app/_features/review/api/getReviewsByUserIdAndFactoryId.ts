import { Review } from '@/app/_common/types'

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
