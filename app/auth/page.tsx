'use client'
import Container from '../_components/layouts/container'
import { cookies } from 'next/headers'
import AuthForm from '../_features/auth/components/form'

const Auth = () => {
  return (
    <Container>
      <AuthForm />
    </Container>
  )
}

export default Auth
