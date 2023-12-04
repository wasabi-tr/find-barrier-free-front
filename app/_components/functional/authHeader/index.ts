import { cookies } from 'next/headers'

export const authHeaderServerComponents = () => {
  const cookieStore = cookies()
  const theme = cookieStore.get('authjs.session-token')
  const bearer = theme?.value
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${bearer}`,
  }
}
