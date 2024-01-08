'use client'
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'
import Container from '../../layouts/container'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null)
  const wrapper = useRef(null)
  const closeBtn = useRef<HTMLButtonElement>(null)
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (
        e.target === overlay.current ||
        e.target === wrapper.current ||
        e.target === closeBtn.current
      ) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, overlay, wrapper]
  )

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss]
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  useEffect(() => {
    if (closeBtn.current) {
      closeBtn.current.focus()
    }
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 h-full px-4"
      onClick={onClick}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[736px] max-w-full max-h-[80%] overflow-y-scroll">
        <div className="relative bg-white rounded-md  ">
          <button
            ref={closeBtn}
            className="absolute top-6 right-6 flex flex-col justify-center items-center w-14 h-14 border border-color-main-800 text-xs rounded-full  transition z-20 hover:bg-color-main-200 sm:text-xs sm:w-12 sm:h-12 "
          >
            <span>
              <XMarkIcon className="w-4 h-4 text-color-main-800" />{' '}
            </span>
            閉じる
          </button>
          {children}
        </div>
      </div>
    </div>
  )
}
