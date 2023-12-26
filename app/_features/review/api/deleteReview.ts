import { cookies } from 'next/headers'

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
