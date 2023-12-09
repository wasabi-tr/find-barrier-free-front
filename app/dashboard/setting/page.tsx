'use client'
import { userUpdate } from '@/app/_components/functional/actons/userUpdate'
import Spinner from '@/app/_components/ui-parts/spinner'
import AvatarEditField from '@/app/_features/setting/components/avatarEditField'
import DescriptionEditField from '@/app/_features/setting/components/descriptionEditField'
import NickNameEditFieldCopy from '@/app/_features/setting/components/nickNameEditField'
import { useQueryUser } from '@/app/_features/user/hooks/useQueryUser'
import { ChangeEvent, memo, useState } from 'react'

const DashboardSetting = () => {
  const { data: user, isError, isLoading } = useQueryUser()
  if (isError) return <p>ユーザー情報を取得できませんでした。</p>
  if (isLoading) return <Spinner />

  return (
    <section>
      {/* <form action={userUpdate}> */}
      <div className="grid gap-16">
        <NickNameEditFieldCopy />
        <DescriptionEditField />
        <AvatarEditField />
      </div>
      {/* </form> */}
    </section>
  )
}

export default memo(DashboardSetting)
