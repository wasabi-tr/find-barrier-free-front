'use client'
import { logout } from '@/app/_features/auth/api'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const handleClick = async () => {
    await logout()
  }
  return (
    <header>
      <div className=""></div>
      <button onClick={handleClick}>ログアウト</button>
    </header>
  )
}

export default Header
