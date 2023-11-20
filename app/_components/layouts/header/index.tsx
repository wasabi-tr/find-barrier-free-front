'use client'
import { logout } from '@/app/_features/auth/api'
import Link from 'next/link'
import React from 'react'
import { signIn, signOut } from 'next-auth/react' // 1⃣
import { useSearchParams } from 'next/navigation'
const Header = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/auth/login' // 2⃣
  return (
    <header>
      <div className=""></div>
      <button onClick={() => signIn()}>Login With Google</button>
      <button onClick={() => signOut()}>signOut</button>
    </header>
  )
}

export default Header
