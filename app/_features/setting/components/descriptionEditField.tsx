'use client'
import { User } from '@/app/_common/types'
import { updateDescription } from '@/app/_components/functional/actons/updateUser'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, memo, useState } from 'react'
import { useFormState } from 'react-dom'
const initialState = {
  message: null,
}
const DescriptionEditField = ({ user }: { user: User }) => {
  const router = useRouter()
  const [editedDescription, setEditedDescription] = useState<
    string | undefined
  >('')
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const handleClick = () => {
    setIsEdit((prev) => {
      setEditedDescription(!prev ? user?.description : '')
      return !prev
    })
  }
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditedDescription(e.target.value)
  }
  const [state, update] = useFormState(updateDescription, initialState)

  return (
    <form
      action={async (data) => {
        await update(data)
        router.refresh()
      }}
    >
      <div className="flex flex-col items-start gap-5 relative p-8  border border-color-main-400 rounded-md  ">
        <h2 className="text-lg">自己紹介</h2>
        <input type="hidden" name="id" value={user?.id} />
        {isEdit ? (
          <>
            <textarea
              name="description"
              value={editedDescription ?? user?.description}
              onChange={handleChange}
              className="p-2 rounded-lg bg-white w-full border border-color-main-400 min-h-[240px]"
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
            <p>{user?.description}</p>
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

export default memo(DescriptionEditField)
