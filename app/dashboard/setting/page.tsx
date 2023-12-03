'use client'
import { userUpdate } from '@/app/_components/functional/actons/userUpdate'
import { getUser } from '@/app/_features/user/api'
import { useSession } from 'next-auth/react'
import { memo, useEffect, useState } from 'react'

const DashboardSetting = () => {
  const { data: session } = useSession()
  const [userId, setUserId] = useState(null)
  console.log(session?.user.id)
  const test = async () => {
    const res = await fetch(`/api/user?id=${session?.user.id}`)
    const data = await res.json()
    console.log(data)
  }
  useEffect(() => {
    setUserId(session?.user.id)
    if (userId) {
      test()
    }
  }, [session])
  if (!userId) {
    return <div>Loading...</div>
  }
  return (
    <section>
      <form action={userUpdate}>
        <h2>ユーザーネーム</h2>

        <button>送信</button>
      </form>
    </section>
  )
}

export default memo(DashboardSetting)
