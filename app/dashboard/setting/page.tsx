import { authHeaderServerComponents } from '@/app/_components/functional/authHeader'
import AvatarEditField from '@/app/_features/setting/components/avatarEditField'
import DescriptionEditField from '@/app/_features/setting/components/descriptionEditField'
import NickNameEditFieldCopy from '@/app/_features/setting/components/nickNameEditField'
import { options } from '@/app/next-auth'
import { getServerSession } from 'next-auth'
import { memo } from 'react'

const DashboardSetting = async () => {
  const session = await getServerSession(options)
  const authorization = authHeaderServerComponents()
  const res = await fetch(`${process.env.API_URL}/user/${session?.user.id}`, {
    headers: { ...authorization },
  })
  const user = await res.json()

  return (
    <section>
      <div className="grid gap-16">
        <NickNameEditFieldCopy user={user} />
        <DescriptionEditField user={user} />
        <AvatarEditField user={user} />
      </div>
    </section>
  )
}

export default memo(DashboardSetting)
