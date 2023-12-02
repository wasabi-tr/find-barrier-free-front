import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { randomBytes, randomUUID } from 'crypto'
import { auth } from '../_common/libs/firebase/admin'
import { v4 as uuidv4 } from 'uuid'

export const options: NextAuthOptions = {
  // debug: true,
  session: {
    strategy: 'jwt',
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString('hex')
    },
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
  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      // 注意: トークンをログ出力してはダメです。
      // console.log('in jwt', { user, token, account, profile })

      if (user) {
        token.user = user
        const u = user as any
        token.role = u.role
      }
      if (account) {
        token.accessToken = account.access_token
      }
      // if (account?.provider === 'google') {
      //   // Google認証時にUUIDを生成
      //   user.id = uuidv4()
      // }
      return token
    },
    session: async ({ session, token }) => {
      // session.user.role = token.role
      // session.user.id = token.user.id
      // console.log(token.emailVerified)
      // console.log(token.uid)

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
  },
}
