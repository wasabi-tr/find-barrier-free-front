'use client'
import { User } from '@/app/_common/types'
import { useQueryClient } from '@tanstack/react-query'
import React, { ChangeEvent, memo, useState } from 'react'
const NickNameEditField = () => {
  const queryClient = useQueryClient()
  const user = queryClient.getQueryData<User>(['user'])
  const [editedName, setEditedName] = useState<string | undefined>('')
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const handleClick = () => {
    setIsEdit((prev) => {
      setEditedName(!prev ? user?.nickName : '')
      return !prev
    })
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value)
  }
  return (
    <form action="">
      <div className="flex flex-col items-start gap-5 relative p-8 border border-color-main-400 rounded-md  ">
        <h2 className="text-lg">ユーザーネーム</h2>
        {isEdit ? (
          <>
            <input
              type="text"
              name="nickName"
              value={editedName ?? user?.nickName}
              onChange={handleChange}
              className="p-2  rounded-lg bg-white w-full border border-color-main-400 "
            />
            <div className="flex items-center justify-end gap-1 w-full">
              <button
                type="button"
                onClick={handleClick}
                className="px-4 py-3 rounded-lg text-color-main-600  transition hover:bg-color-main-200"
              >
                キャンセルする
              </button>
              <button className="px-4 py-3 border border-color-main-400 rounded-lg transition hover:bg-color-main-200 ">
                保存する
              </button>
            </div>
          </>
        ) : (
          <>
            <p>{user?.nickName}</p>
            <button
              type="button"
              onClick={handleClick}
              className="px-4 py-3 border border-color-main-400 rounded-lg transition hover:bg-color-main-200 "
            >
              変更する
            </button>
          </>
        )}
      </div>
    </form>
  )
}

export default memo(NickNameEditField)
