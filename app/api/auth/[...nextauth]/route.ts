import { options } from '@/app/next-auth'
import NextAuth from 'next-auth'

const handler = NextAuth(options)

export { handler as GET, handler as POST }
// export const runtime = 'edge'
