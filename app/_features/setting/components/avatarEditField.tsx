'use client'
import { usePreviewImage } from '@/app/_common/hooks/usePreviewImage'
import { User } from '@/app/_common/types'
import { updateAvatar } from '@/app/_components/functional/actons/updateUser'
import { UserIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { memo, useState } from 'react'
import { useFormState } from 'react-dom'
const initialState = {
  message: null,
}
const AvatarEditField = ({ user }: { user: User }) => {
  const router = useRouter()
  const { imagePreviewUrl, handleImageChange } = usePreviewImage()
  const [editedAvatar, setEditedAvatar] = useState<string | undefined>('')
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const handleClick = () => {
    setIsEdit((prev) => {
      setEditedAvatar(!prev ? user?.avatarUrl : '')
      return !prev
    })
  }
  const [state, update] = useFormState(updateAvatar, initialState)
  return (
    <form
      action={async (data) => {
        await update(data)
        router.refresh()
      }}
    >
      <div className="relative flex flex-col items-start gap-5 p-8 border border-color-main-400 rounded-md  ">
        <h2 className="text-lg">プロフィール画像</h2>
        <input type="hidden" name="id" value={user?.id} />
        <div className="flex items-center gap-8 w-full">
          <div className="flex items-center justify-center relative w-20 h-20 rounded-full border border-color-main-200 overflow-hidden ">
            {user?.avatarUrl ? (
              <Image
                src={imagePreviewUrl || user.avatarUrl}
                alt=""
                width={80}
                height={80}
                className="object-cover"
              />
            ) : imagePreviewUrl ? (
              <Image
                src={imagePreviewUrl}
                alt=""
                width={80}
                height={80}
                className="object-cover"
              />
            ) : (
              <UserIcon className="w-10 h-10 text-color-main-400" />
            )}
          </div>
          <input
            id="avatar"
            type="file"
            name="avatar"
            onChange={handleImageChange}
            onClick={handleClick}
            className="opacity-0 absolute w-0 h-0"
          />
          <label
            htmlFor="avatar"
            className="px-4 py-3 border border-color-main-400 rounded-lg transition hover:bg-color-main-200 w-[300px]  "
          >
            プロフィール画像を変更する
          </label>
          {isEdit && (
            <button className="px-4 py-3 border border-color-main-400 rounded-lg transition hover:bg-color-main-200 ">
              保存する
            </button>
          )}
        </div>
        {/* <>
            <button
              type="button"
              onClick={handleClick}
              className="px-4 py-3 border border-color-main-400 rounded-lg transition hover:bg-color-main-200 "
            >
              プロフィール画像を変更する
            </button>
          </> */}
      </div>
    </form>
  )
}

export default memo(AvatarEditField)
