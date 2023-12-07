'use client'
import { User } from '@/app/_common/types'
import { userUpdate } from '@/app/_components/functional/actons/userUpdate'
import { authHeaderServerComponents } from '@/app/_components/functional/authHeader'
import { SettingItems } from '@/app/_features/dashboard/components/settingItems'
import { options } from '@/app/next-auth'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { memo, useEffect, useState } from 'react'
// export const getUser = async (id: string): Promise<User | undefined> => {
//   const authorization = authHeaderServerComponents()
//   //認証の処理を追加する
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`, {
//     headers: { ...authorization },
//   })
//   if (!res.ok) return

//   const user = await res.json()
//   return user
// }

const DashboardSetting = () => {
  // const session = await getServerSession(options)
  // const user = await getUser(session?.user.id)
  // console.log(user)
  // if (!user) return
  const getUser = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`)
    const data = await res.json()
    console.log(data)
    return data
  }
  getUser()
  useEffect(() => {}, [])
  return (
    <section>
      <form action={userUpdate}>{/* <SettingItems user={user} /> */}</form>
    </section>
  )
}

export default memo(DashboardSetting)
