import React from 'react'
import { signIn, signOut } from 'next-auth/react' // 1⃣
import Link from 'next/link'
import { getServerSession } from 'next-auth/next'
import { options } from '@/app/options'
import SideMenu from '../sideMenu'
const Header = async () => {
  const session = await getServerSession(options)
  return (
    <header className="flex justify-between py-6 px-6 shadow-sm">
      <div className="">
        <Link href={'/'}>Logo</Link>
      </div>

      {session?.user ? (
        <>
          <Link href={'/mypage'}>マイページ</Link>
          <SideMenu />
        </>
      ) : (
        <>
          <button onClick={() => signIn()}>ログイン</button>
        </>
      )}
    </header>
  )
}

export default Header
