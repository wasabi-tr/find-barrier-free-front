'use client'
import { User } from '@/app/_common/types'
import { updateNickName } from '@/app/_components/functional/actons/updateUser'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, memo, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
const initialState = {
  message: null,
}
const NickNameEditField = ({ user }: { user: User }) => {
  const router = useRouter()
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

  const [state, update] = useFormState(updateNickName, initialState)
  const { pending } = useFormStatus()

  return (
    <form
      action={async (data) => {
        await update(data)
        router.refresh()
      }}
    >
      <div className="flex flex-col items-start gap-5 relative p-8 border border-color-main-400 rounded-md  ">
        <h2 className="text-lg">ユーザーネーム</h2>
        <input type="hidden" name="id" value={user?.id} />
        {isEdit ? (
          <>
            <div className="grid gap-1 w-full">
              <input
                type="text"
                name="nickName"
                value={editedName ?? user?.nickName}
                onChange={handleChange}
                className="p-2  rounded-lg bg-white w-full border border-color-main-400 "
              />
              {state?.errors && (
                <p className="text-red-600 text-sm" aria-live="polite">
                  {state.errors.nickName}
                </p>
              )}
            </div>
            <div className="flex items-center justify-end gap-1 w-full">
              <button
                type="button"
                onClick={handleClick}
                className="px-4 py-3 rounded-lg text-color-main-600  transition hover:bg-color-main-200"
              >
                キャンセルする
              </button>
              <button className="px-4 py-3 border border-color-main-400 rounded-lg transition hover:bg-color-main-200 ">
                {pending ? '保存中...' : '保存する'}
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
              disabled={pending}
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
