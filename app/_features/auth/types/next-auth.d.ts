import NextAuth, { DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface User {
    id: string | number
  }

  interface Session {
    user: User
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    idToken?: string
  }
}
