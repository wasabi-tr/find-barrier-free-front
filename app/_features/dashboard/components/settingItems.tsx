'use client'
import { User } from '@/app/_common/types'
import { userUpdate } from '@/app/_components/functional/actons/userUpdate'
import { memo } from 'react'

const SettingItemsMemo = ({ user }: { user: User }) => {
  return (
    <div className="">
      <h2>ユーザーネーム</h2>
      <input type="text" name="test" />
      <button>送信</button>
    </div>
  )
}
export const SettingItems = memo(SettingItemsMemo)
