import Container from '../_components/layouts/container'
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
    <form action={formActions}>
      <input type="file" name="avatar" />
      <input type="text" name="text" />
      <button>送信ボタン</button>
    </form>
  )
}

export default Dashboard
