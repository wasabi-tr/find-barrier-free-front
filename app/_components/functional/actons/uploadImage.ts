'use server'
import { putImage } from '@/app/_common/libs/r2/storage'
import { ChangeEvent } from 'react'

export const uploadAvatarImageAction = async (file: File) => {
  //   if (!e.target.files || e.target.files.length === 0) {
  //     console.log('error')
  //     throw new Error('Please select the image file')
  //   }
  //   console.log(e.target.files[0])x
  //   const path = await putImage(e.target.files[0], 'avatar')
  return 'test'
}
