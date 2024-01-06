import React, { FC } from 'react'

const SearchBox = ({ children }: { children: React.ReactNode }) => {
  //server actionsをで実装していることが足を引っ張っている。
  return (
    <>
      <form
        action="factory"
        method="GET"
        className="flex flex-col gap-9 rounded-2xl bg-white p-10 border-2 sm:p-5"
        aria-label="施設を検索する"
      >
        {children}
      </form>
    </>
  )
}

export default SearchBox
