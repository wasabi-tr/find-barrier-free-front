import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { randomBytes, randomUUID } from 'crypto'
import { auth } from '../_common/libs/firebase/admin'
import { NextAuthOptions } from 'next-auth'
import { createUserByGoogle } from '../_features/user/api'

export const options: NextAuthOptions = {
  // debug: true,
  pages: {
    signIn: '/auth/sign-in', // カスタムのサインインページへのパス
    // 他のページ設定...
  },
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      credentials: {},
      // メルアド認証処理
      authorize: async ({ idToken }: any, _req) => {
        if (idToken) {
          try {
            const decoded = await auth.verifyIdToken(idToken)

            if (decoded) {
              return {
                id: decoded.uid,
                name: decoded.email,
                role: decoded.role,
              }
            }
          } catch (err) {
            console.error(err)
          }
        }
        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      if (user) {
        token.user = user
        const u = user as any
        token.role = u.role
      }
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    session: async ({ session, token }) => {
      token.accessToken
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          role: token.role,
        },
      }
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user, account, profile, email, credentials })
      if (account?.provider === 'google') {
        await createUserByGoogle({ id: user.id, name: user.name! })
      }

      return true
    },
  },
}
