'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

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
    <>
      <button
        type="button"
        aria-controls="navigation"
        aria-expanded={open}
        aria-label="メニューを開きます"
        className={`hidden relative w-11 h-11 bg-primary z-50 cursor-pointer content-center justify-items-center gap-1 ml-3  border border-gray-200 rounded ${
          open && 'gap-0'
        } sm:grid`}
        onClick={() => {
          setIsOpen((prev) => !prev)
        }}
      >
        <span
          className={`bg-black-333 block transition h-[1px] w-6 ${
            open && 'transform -rotate-45 '
          } sm:w-5`}
          style={spanStyle}
        ></span>
        <span
          className={`bg-black-333 block transition h-[1px] w-6 ${
            open && 'opacity-0'
          } sm:w-5`}
          style={spanStyle}
        ></span>
        <span
          className={`bg-black-333 block transition h-[1px] w-6 ${
            open && 'transform rotate-45'
          } sm:w-5`}
          style={spanStyle}
        ></span>
      </button>
      <nav
        id="navigation"
        aria-hidden={!open}
        className={`fixed top-0 right-0 w-full h-screen bg-navy bg-opacity-70 z-40 transition duration-300 flex justify-center items-center  ${
          !open ? 'opacity-0 invisible' : 'visible opacity-100:'
        }`}
      >
        <div className=" rounded-md px-8 py-11 mt-8 sm:px-5">
          <ul className="grid grid-cols-1 mt-4">
            <li>
              <Link href={'/'}>ホーム</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default SideMenu
