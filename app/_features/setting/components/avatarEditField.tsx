'use client'
import { userMutateAvatarImage } from '@/app/_common/hooks/useUploadImage'
import { User } from '@/app/_common/types'
import { uploadAvatarImageAction } from '@/app/_components/functional/actons/uploadImage'
import { UserIcon } from '@heroicons/react/24/solid'
import { useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import React, { ChangeEvent, memo, useState, useTransition } from 'react'
const AvatarEditField = () => {
  const queryClient = useQueryClient()
  const user = queryClient.getQueryData<User>(['user'])

  const [editedAvatar, setEditedAvatar] = useState<string | undefined>('')
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const { updateAvatarImage } = userMutateAvatarImage()
  const handleClick = () => {
    setIsEdit((prev) => {
      setEditedAvatar(!prev ? user?.avatarUrl : '')
      return !prev
    })
  }
  const [isPending, startTransition] = useTransition()
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    // const filePath = updateAvatarImage.mutate(e)
    //Server　Actionsに渡せる引数は何があるか調査
    startTransition(async () => {
      if (!e.target.files || e.target.files.length === 0) {
        throw new Error('Please select the image file')
      }
      await uploadAvatarImageAction(e.target.files[0])
    })

    setEditedAvatar(e.target.value)
  }

  return (
    <form>
      <div className="flex flex-col items-start gap-5 relative p-8 border border-color-main-400 rounded-md  ">
        <h2 className="text-lg">プロフィール画像</h2>
        <div className="flex items-center justify-center relative w-20 h-20 rounded-full border border-color-main-200 ">
          {user?.avatarUrl ? (
            <Image
              src={user.avatarUrl}
              alt=""
              width={20}
              height={20}
              className="w-10 h-10 object-cover"
            />
          ) : (
            <UserIcon className="w-10 h-10 text-color-main-400" />
          )}
        </div>
        {isEdit ? (
          <>
            <input
              type="file"
              name="avatar"
              onChange={handleChange}
              // className="p-2  rounded-lg bg-white w-full border border-color-main-400 "
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
            <button
              type="button"
              onClick={handleClick}
              className="px-4 py-3 border border-color-main-400 rounded-lg transition hover:bg-color-main-200 "
            >
              プロフィール画像を変更する
            </button>
          </>
        )}
      </div>
    </form>
  )
}

export default memo(AvatarEditField)
