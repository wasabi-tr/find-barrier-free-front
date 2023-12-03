import { ChangeEvent, useEffect, useTransition } from 'react'
import Container from '../_components/layouts/container'
import { getUser } from '../_features/user/api'
import { auth } from '../next-auth'
import { useSession } from 'next-auth/react'
import { putImage } from '../_common/libs/r2/storage'

const Dashboard = async () => {
  const formActions = async (data: FormData) => {
    'use server'
    const thumbnailDataURL = data.get('avatar') as File
    console.log(thumbnailDataURL)

    if (thumbnailDataURL) {
      const path = await putImage(thumbnailDataURL, 'avatar')
    }
  }

  return (
    <Container>
      <form action={formActions}>
        <input type="file" name="avatar" />
        <input type="text" name="text" />
        <button>送信ボタン</button>
      </form>
    </Container>
  )
}

export default Dashboard
