'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [test, setTest] = useState(false)
  return (
    <header>
      <div className=""></div>
      <Link href={'/auth'}>ログイン</Link>
      <Link href={'/mypage'}>マイページ</Link>
    </header>
  )
}

export default Header
