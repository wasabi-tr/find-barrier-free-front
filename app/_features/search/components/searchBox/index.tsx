'use client'
import React, { FC } from 'react'
import { searchAction } from '../../actions/searchAction'
import { useFormState, useFormStatus } from 'react-dom'

const SearchBox = ({ children }: { children: React.ReactNode }) => {
  const initialState = {
    resultFactories: [],
  }
  const { pending } = useFormStatus()
  const [state, search] = useFormState(searchAction, initialState)
  //server actionsをで実装していることが足を引っ張っている。
  return (
    <>
      <form
        action={search}
        className="flex flex-col gap-9"
        aria-label="施設を検索する"
      >
        {children}
      </form>
    </>
  )
}

export default SearchBox
