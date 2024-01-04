'use client'
import Link from 'next/link'
import React from 'react'
import {
  UserIcon,
  HomeIcon,
  BuildingLibraryIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { signIn, useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
const BottomNavigation = () => {
  const session = useSession()

  return (
    <div className="hidden sm:block fixed bottom-0 left-0 w-full bg-white">
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
          {session?.data?.user ? (
            <Link
              href={'/dashboard/factory'}
              className="flex flex-col justify-center items-center gap-1 p-3 rounded-md transition  hover:bg-color-main-200 text-xs h-full"
            >
              <span>
                <UserIcon className="w-6 h-6 text-color-main-800" />
              </span>
              マイページ
            </Link>
          ) : (
            <Link
              href={'/auth/sign-in'}
              className="flex flex-col justify-center items-center gap-1 p-3 rounded-md transition  hover:bg-color-main-200 text-xs h-full"
            >
              <span>
                <ArrowRightOnRectangleIcon className="w-6 h-6 text-color-main-800" />
              </span>
              ログイン
            </Link>
          )}
        </li>
      </ul>
    </div>
  )
}

export default BottomNavigation
