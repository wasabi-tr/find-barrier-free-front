'use client'
import { User } from '@/app/_common/types'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, memo, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { updateDescription } from '../../user/actions/updateUser'
import { Button } from '@/app/_components/ui-parts/button'
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
  const { pending } = useFormStatus()

  return (
    <form
      action={async (data) => {
        await update(data)
        router.refresh()
      }}
    >
      <div className="flex flex-col items-start gap-5 relative p-8  border border-color-main-400 rounded-md  ">
        <label htmlFor="description" className="text-lg">
          自己紹介
        </label>
        <input type="hidden" name="id" value={user?.id} />
        {isEdit ? (
          <>
            <textarea
              id="description"
              name="description"
              value={editedDescription ?? user?.description}
              onChange={handleChange}
              className="p-2 rounded-lg bg-white w-full border border-color-main-400 min-h-[240px]"
            />
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
