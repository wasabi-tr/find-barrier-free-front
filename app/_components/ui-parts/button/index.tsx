import React from 'react'

type Props = {
  children: React.ReactNode
  blue?: boolean
  small?: boolean
  large?: boolean
}

export const Button = ({
  children,
  blue = false,
  small = false,
  large = false,
}: Props) => {
  let width = 'w-[320px]'
  if (small) {
    width = 'w-[100px]'
  } else if (large) {
    width = 'w-[400px]'
  }
  return (
    <button
      className={`px-4 py-3 border  rounded-lg transition width  ${
        blue
          ? 'border-color-blue-700 bg-color-blue-700 text-white hover:bg-color-blue-800'
          : 'border-color-main-400 bg-white hover:bg-color-main-200 '
      } `}
    >
      {children}
    </button>
  )
}
