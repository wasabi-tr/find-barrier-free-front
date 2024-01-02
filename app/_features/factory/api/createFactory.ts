import { EditedFactory } from '@/app/_common/types'
import { cookies } from 'next/headers'

export const createFactory = async (
  factory: Omit<EditedFactory, 'id' | 'genreIds' | 'featureIds'>
) => {
  try {
    const cookieStore = cookies()
    const theme = cookieStore.get('next-auth.session-token')
    const bearer = theme?.value

    const res = await fetch(`${process.env.API_URL}/factory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearer}`,
      },
      body: JSON.stringify({ ...factory }),
    })

    return await res.json()
  } catch (error: any) {
    throw new Error(error)
  }
}
