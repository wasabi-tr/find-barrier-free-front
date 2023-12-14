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
  return (
    <button
      className={`px-4 py-3 border  rounded-lg transition w-[320px] ${
        green
          ? 'border-color-green-700 bg-color-green-700 text-white hover:bg-color-green-800'
          : 'border-color-main-400 bg-white hover:bg-color-main-200 '
      } ${small && 'w-[100px]'} ${large && 'w-[300px]'}`}
    >
      {children}
    </button>
  )
}
