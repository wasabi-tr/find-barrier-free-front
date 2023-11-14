'use client'
import Container from '@/app/_components/layouts/container'
import AuthForm from '@/app/_features/auth/components/form'
import { cookies } from 'next/headers'

const AuthLogin = () => {
  return (
    <Container>
      <AuthForm />
    </Container>
  )
}

export default AuthLogin
