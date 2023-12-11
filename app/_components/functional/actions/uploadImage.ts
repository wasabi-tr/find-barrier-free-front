'use server'
import { putImage } from '@/app/_common/libs/r2/storage'

export const uploadAvatarImageAction = async (data: FormData) => {
  const thumbnailDataURL = data.get('avatar') as File

  if (thumbnailDataURL) {
    const path = await putImage(thumbnailDataURL, 'avatar')
    return path
  }
}
