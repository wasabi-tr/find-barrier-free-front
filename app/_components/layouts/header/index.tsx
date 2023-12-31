'use client'
import React from 'react'
import Link from 'next/link'
import SideMenu from '../sideMenu'
import {
  UserIcon,
  BuildingLibraryIcon,
  PlusIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
const Header = () => {
  const session = useSession()
  return (
    <header className="">
      <div className="container">
        <div className="flex items-center py-3">
          <div>
            <Link
              href={'/'}
              className="flex items-center  p-3 rounded-md transition duration-300 
            hover:bg-color-main-200"
            >
              <Image
                src={'/common/logo.svg'}
                width={180}
                height={60}
                alt="ひろばリンク"
                className=""
              />
            </Link>
          </div>
          <ul className="flex gap-4 items-center ml-auto sm:hidden">
            <li>
              <Link
                href={'/factory'}
                className="flex items-center gap-2 p-3 rounded-md transition  hover:bg-color-main-200 "
              >
                施設情報
              </Link>
            </li>
            {session?.data?.user ? (
              <>
                <li>
                  <Link
                    href={'/dashboard/factory'}
                    className="flex items-center gap-2 p-3 rounded-md transition  hover:bg-color-main-200 "
                  >
                    マイページ
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/dashboard/factory/register'}
                    className="flex items-center gap-2 p-3 rounded-md transition bg-color-green-700 text-white  hover:bg-color-green-800 "
                  >
                    <span>
                      <PlusIcon className="w-6 h-6 text-white" />
                    </span>
                    施設を登録する
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  href={'/auth/sign-in'}
                  className="flex items-center gap-2 p-3 rounded-md transition  hover:bg-color-main-200 "
                >
                  <span>
                    <ArrowRightOnRectangleIcon className="w-6 h-6 text-color-main-800" />
                  </span>
                  ログイン
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
