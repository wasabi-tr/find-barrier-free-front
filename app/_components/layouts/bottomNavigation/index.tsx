import Link from 'next/link'
import React from 'react'
import {
  UserIcon,
  HomeIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline'
import { signIn } from 'next-auth/react'
import LoginButton from '../../ui-parts/authButton/loginButton'
import { getServerSession } from 'next-auth'
const BottomNavigation = async () => {
  const session = await getServerSession()

  return (
    <div className="hidden sm:block fixed bottom-0 left-0 w-full">
      <ul className="grid grid-cols-3  ml-auto sm">
        <li>
          <Link
            href={'/'}
            className="flex flex-col justify-center items-center gap-1 p-3 rounded-md transition  hover:bg-color-main-200 text-xs h-full"
          >
            <span>
              <HomeIcon className="w-5 h-5 text-color-main-800" />
            </span>
            ホーム
          </Link>
        </li>
        <li>
          <Link
            href={'/factory'}
            className="flex flex-col justify-center items-center gap-1 p-3 rounded-md transition  hover:bg-color-main-200 text-xs h-full"
          >
            <span>
              <BuildingLibraryIcon className="w-6 h-6 text-color-main-800" />
            </span>
            施設情報
          </Link>
        </li>
        <li>
          {session?.user ? (
            <Link
              href={'/dashboard'}
              className="flex flex-col justify-center items-center gap-1 p-3 rounded-md transition  hover:bg-color-main-200 text-xs h-full"
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
      </ul>
    </div>
  )
}

export default BottomNavigation
