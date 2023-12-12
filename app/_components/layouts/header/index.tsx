'use client'
import React from 'react'
import Link from 'next/link'
import SideMenu from '../sideMenu'
import {
  UserIcon,
  HomeIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline'
import LoginButton from '../../ui-parts/authButton/loginButton'
import LogoutButton from '../../ui-parts/authButton/logoutButton'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
const Header = () => {
  const session = useSession()
  return (
    <header className="flex items-center py-6 px-6 shadow-sm">
      <div className="">
        <Link
          href={'/'}
          className="px-4 py-1 rounded-md transition duration-300 
          hover:bg-color-main-200"
        >
          のとさんず
        </Link>
      </div>
      <ul className="flex gap-4 items-center ml-auto sm:hidden">
        <li>
          <Link
            href={'/'}
            className="flex items-center gap-2 p-3 rounded-md transition  hover:bg-color-main-200 "
          >
            <span>
              <HomeIcon className="w-6 h-6 text-color-main-800" />
            </span>
            ホーム
          </Link>
        </li>
        <li>
          <Link
            href={'/factory'}
            className="flex items-center gap-2 p-3 rounded-md transition  hover:bg-color-main-200 "
          >
            <span>
              <BuildingLibraryIcon className="w-6 h-6 text-color-main-800" />
            </span>
            施設情報
          </Link>
        </li>
        <li>
          {session?.data?.user ? (
            <Link
              href={'/dashboard'}
              className="flex items-center gap-2 p-3 rounded-md transition  hover:bg-color-main-200 "
            >
              <span>
                <UserIcon className="w-6 h-6 text-color-main-800" />
              </span>
              マイページ
            </Link>
          ) : (
            <>
              <LoginButton />
            </>
          )}
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
      {/* <>
        <Link
          href={'/dashboard'}
          className="flex items-center gap-2 border border-color-main-400 py-2 px-8 rounded-3xl transition duration-300 ml-auto hover:bg-color-main-200 sm:hidden"
        >
          <span>
            <UserIcon className="h-6 w-6 text-color-main-400" />
          </span>
          マイページ
        </Link>
        <SideMenu />
      </> */}
    </header>
  )
}

export default Header
