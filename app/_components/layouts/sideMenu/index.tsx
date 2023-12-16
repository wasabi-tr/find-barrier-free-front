'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  UserIcon,
  HomeIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline'

const SideMenu = () => {
  const [open, setIsOpen] = useState(false)
  const spanStyle = open ? { gridArea: '1/1' } : {}

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // コンポーネントがアンマウントされる時にスタイルをリセット
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])
  return (
    <div className="ml-auto">
      <button
        type="button"
        aria-controls="navigation"
        aria-expanded={open}
        aria-label={`${open ? 'メニューを閉じます' : 'メニューを開きます'}`}
        className={`hidden relative w-14 h-14 f z-50 cursor-pointer  ml-3 rounded-full transition duration-300 hover:bg-color-main-200 sm:block `}
        onClick={() => {
          setIsOpen((prev) => !prev)
        }}
      >
        <span
          className={`grid justify-items-center gap-1 content-center h-4 ${
            open && 'gap-0'
          }`}
        >
          <span
            className={`bg-color-main-800 block transition h-[1px] w-6 ${
              open && 'transform -rotate-45 '
            } sm:w-5`}
            style={spanStyle}
          ></span>
          <span
            className={`bg-color-main-800 block transition h-[1px] w-6 ${
              open && 'opacity-0'
            } sm:w-5`}
            style={spanStyle}
          ></span>
          <span
            className={`bg-color-main-800 block transition h-[1px] w-6 ${
              open && 'transform rotate-45'
            } sm:w-5`}
            style={spanStyle}
          ></span>
        </span>
        <span className="text-xs">{open ? '閉じる' : 'メニュー'}</span>
      </button>
      <nav
        id="navigation"
        aria-hidden={!open}
        className={`fixed top-0 right-0 pt-20 px-3 w-full h-screen bg-white  z-40 transition flex  ${
          !open ? 'opacity-0 invisible' : 'visible opacity-100:'
        }`}
      >
        <div className="w-full border-t border-dotted border-color-main-400">
          <ul className="grid grid-cols-1 w-full mt-4 justify-start">
            {/* <li>
              <Link href={'/'} className="flex items-center gap-2 py-4">
                <span>
                  <HomeIcon className="w-6 h-6 text-color-main-800" />
                </span>
                ホーム
              </Link>
            </li> */}
            <li>
              <Link
                href={'/dashboard/factory'}
                className="flex items-center gap-2 py-4"
              >
                <span>
                  <UserIcon className="w-6 h-6 text-color-main-800" />
                </span>
                マイページ
              </Link>
            </li>
            <li>
              <Link href={'/factory'} className="flex items-center gap-2 py-4">
                <span>
                  <BuildingLibraryIcon className="w-6 h-6 text-color-main-800" />
                </span>
                施設情報
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default SideMenu
