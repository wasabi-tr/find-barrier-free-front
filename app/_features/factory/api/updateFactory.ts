import { EditedFactory } from '@/app/_common/types'
import { cookies } from 'next/headers'

export const updateFactory = async (factory: EditedFactory) => {
  try {
    const cookieStore = cookies()
    const theme = cookieStore.get('next-auth.session-token')
    const bearer = theme?.value
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/factory`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearer}`,
      },
      body: JSON.stringify(factory),
    })

    return await res.json()
  } catch (error: any) {
    throw new Error(error)
  }
}
