import { auth } from '@/app/_common/libs/firebase/client'
import React, { useCallback, useState } from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

import { signIn as signInByNextAuth } from 'next-auth/react'
import { createUser } from '../../user/api'

export const useMutateAuth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const signIn = useCallback(async () => {
    console.log(email, password)

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(userCredential)
      const idToken = await userCredential.user.getIdToken()
      await signInByNextAuth('credentials', {
        idToken,
      })

      setEmail('')
      setPassword('')
      setMessage('ログインに成功しました。')
    } catch (e: any) {
      console.log(e)

      //   setEmail('')
      //   setPassword('')
      setMessage('メールアドレスまたはパスワードが間違えています。')
      console.log(e.message)
    }
  }, [auth, email, password, setMessage])

  const singUp = useCallback(async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(userCredential.user)
      await createUser(userCredential)
      const idToken = await userCredential.user.getIdToken()
      await signInByNextAuth('credentials', {
        idToken,
      })
      setEmail('')
      setPassword('')
      setMessage('ログインに成功しました。')
    } catch (e: any) {
      //   setEmail('')
      //   setPassword('')
      if (e.message === 'Firebase: Error (auth/email-already-in-use).') {
        setMessage('このメールアドレスは既に使用されています。')
      }
      console.log(e.message)
    }
  }, [auth, email, password, setMessage])
  return { email, setEmail, password, setPassword, signIn, singUp, message }
}
