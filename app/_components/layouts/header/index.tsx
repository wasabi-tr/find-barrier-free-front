import React from 'react'
import { signIn, signOut } from 'next-auth/react' // 1⃣
import Link from 'next/link'
import { getServerSession } from 'next-auth/next'
import { options } from '@/app/options'
import SideMenu from '../sideMenu'
import { UserIcon } from '@heroicons/react/24/solid'
const Header = async () => {
  const session = await getServerSession(options)
  return (
    <header className="flex justify-between py-6 px-6 shadow-sm">
      <div className="">
        <Link
          href={'/'}
          className="px-4 py-1 rounded-md transition duration-300 
          hover:bg-color-main-200"
        ></Link>
      </div>
      {session?.user ? (
        <>
          <Link
            href={'/mypage'}
            className="flex items-center gap-2 border border-color-main-400 py-2 px-8 rounded-3xl transition duration-300 hover:bg-color-main-200"
          >
            <span>
              <UserIcon className="h-6 w-6 text-color-main-400" />
            </span>
            マイページ
          </Link>
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
