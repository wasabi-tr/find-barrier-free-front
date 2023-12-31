'use client'
import { usePreviewImage } from '@/app/_common/hooks/usePreviewImage'
import { User } from '@/app/_common/types'
import { UserIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { memo, useState } from 'react'
import { useFormState } from 'react-dom'
import { updateAvatar } from '../../user/actions/updateUser'
import { Button } from '@/app/_components/ui-parts/button'
const initialState = {
  message: null,
}
const AvatarEditField = ({ user }: { user: User }) => {
  const router = useRouter()
  const { imagePreviewUrl, handleImageChange } = usePreviewImage()
  const [editedAvatar, setEditedAvatar] = useState<string | undefined>('')
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <div className="relative flex flex-col items-start gap-5 p-8 border-2  rounded-2xl bg-white ">
        <label htmlFor="avatar" className="text-lg">
          プロフィール画像
        </label>
        <input type="hidden" name="id" value={user?.id} />
        <div className="">
          <div className="flex items-center justify-center relative w-20 h-20 rounded-full border border-color-main-200 overflow-hidden sm:w-14 sm:h-14 ">
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
          <div className="flex gap-4 mt-4 sm:flex-col">
            <input
              id="avatar"
              type="file"
              name="avatar"
              onChange={(e) => {
                handleImageChange(e)
                handleChange(e)
              }}
              className="opacity-0 absolute w-0 h-0"
            />
            <label
              htmlFor="avatar"
              className="px-4 py-3 border border-color-main-400 rounded-lg transition cursor-pointer hover:bg-color-main-200 w-[300px] sm:w-auto "
            >
              プロフィール画像を変更する
            </label>
            {isEdit && (
              <Button green small>
                保存する
              </Button>
            )}
          </div>
        </div>
      </div>
    </form>
  )
}

export default memo(AvatarEditField)
