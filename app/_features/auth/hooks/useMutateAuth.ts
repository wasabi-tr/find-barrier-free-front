import { auth } from '@/app/_common/libs/firebase/client'
import React, { useCallback, useState } from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

import { getSession, signIn as signInByNextAuth } from 'next-auth/react'
import { createUser, createUserByGoogle } from '../../user/api'

export const useMutateAuth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const signIn = useCallback(async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const idToken = await userCredential.user.getIdToken()
      await signInByNextAuth('credentials', {
        idToken,
        callbackUrl: '/dashboard/setting',
      })

      setEmail('')
      setPassword('')
    } catch (e: any) {
      setError('メールアドレスまたはパスワードが間違えています。')
    }
  }, [auth, email, password, setError])

  const singUp = useCallback(async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      await createUser(userCredential)
      const idToken = await userCredential.user.getIdToken()

      await signInByNextAuth('credentials', {
        idToken,
        callbackUrl: '/auth/sign-up/setting',
      })
    } catch (e: any) {
      if (e.message === 'Firebase: Error (auth/email-already-in-use).') {
        setError('このメールアドレスは既に使用されています。')
      }
    }
  }, [auth, email, password, setError])

  const googleLogin = useCallback(async () => {
    await signInByNextAuth('google', {
      callbackUrl: '/dashboard/setting',
    })
  }, [])

  return {
    email,
    setEmail,
    password,
    setPassword,
    signIn,
    singUp,
    error,
    googleLogin,
  }
}
