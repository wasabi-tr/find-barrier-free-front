import React, { FC } from 'react'

const Container = ({
  children,
  narrow = false,
}: {
  children: React.ReactNode
  narrow?: boolean
}) => {
  return <div className={`container ${narrow && 'is-narrow'}`}>{children}</div>
}

export default Container
