import React from 'react'

type Props = {
  children: React.ReactNode
  green?: boolean
  small?: boolean
  large?: boolean
}

export const Button = ({
  children,
  green = false,
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
        green
          ? 'border-color-green-700 bg-color-green-700 text-white hover:bg-color-green-800'
          : 'border-color-main-400 bg-white hover:bg-color-main-200 '
      } `}
    >
      {children}
    </button>
  )
}
