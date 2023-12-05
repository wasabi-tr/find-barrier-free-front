import { userUpdate } from '@/app/_components/functional/actons/userUpdate'
import { authHeaderServerComponents } from '@/app/_components/functional/authHeader'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { memo, useEffect, useState } from 'react'
export const getUser = async (id: string) => {
  const authorization = authHeaderServerComponents()
  //認証の処理を追加する
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`, {
    headers: { ...authorization },
  })
  //   console.log(res)

  const user = await res.json()
  //   return user
}

const DashboardSetting = async () => {
  const session = await getServerSession()
  const user = await getUser(session?.user.id)
  console.log(session)
  console.log('user----')
  console.log(user)
  console.log('user----')

  //   const user = await getUser(session?.user.id)
  //   console.log(session)
  //   console.log(user)

  return (
    <section>
      <form action={userUpdate}>
        <div className="">
          <h2>ユーザーネーム</h2>
          <input type="text" name="test" />
        </div>
        <button>送信</button>
      </form>
    </section>
  )
}

export default memo(DashboardSetting)
