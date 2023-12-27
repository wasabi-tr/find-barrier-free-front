'use client'
import { User } from '@/app/_common/types'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, memo, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { updateNickName } from '../../user/actions/updateUser'
import { Button } from '@/app/_components/ui-parts/button'
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
      <div className="flex flex-col items-start gap-5 relative p-8 border-2  rounded-2xl  ">
        <label htmlFor="nickName" className="text-lg flex item-center gap-2">
          ユーザーネーム
        </label>
        <input type="hidden" name="id" value={user?.id} />
        {isEdit ? (
          <>
            <div className="grid gap-1 w-full">
              <input
                id="nickName"
                type="text"
                name="nickName"
                value={editedName ?? user?.nickName}
                onChange={handleChange}
                className="py-3 px-2  rounded-lg bg-white w-full border border-color-main-400 "
              />
              {state?.errors && (
                <p className="text-red-600 text-sm" aria-live="polite">
                  {state.errors.nickName}
                </p>
              )}
            </div>
            <div className="flex items-center justify-end gap-5 w-full">
              <button
                type="button"
                onClick={handleClick}
                className="text-color-main-600 border-b border-color-main-600 transition hover:text-color-main-800 hover:border-color-main-800 "
              >
                キャンセルする
              </button>
              <Button green small>
                {pending ? '保存中...' : '保存する'}
              </Button>
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
