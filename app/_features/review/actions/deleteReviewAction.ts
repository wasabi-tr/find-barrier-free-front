import { deleteReview } from '../api'

export const deleteReviewAction = async (formData: FormData) => {
  'use server'
  const userId = formData.get('userId') as string
  const id = formData.get('id') as string
  try {
    const res = await deleteReview({ userId, id })
    console.log(res)
  } catch (error: any) {
    throw new Error(error)
  }
}
