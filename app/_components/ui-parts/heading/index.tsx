import React, { FC } from 'react'

type Props = {
  children: React.ReactNode
}
export const HeadingLg: FC<Props> = ({ children }) => {
  return <h2 className="font-bold text-lg">{children}</h2>
}

export const HeadingMd: FC<Props> = ({ children }) => {
  return <h2 className="font-bold">{children}</h2>
}
