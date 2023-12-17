import { ChangeEvent, useState } from 'react'

export const usePreviewImage = () => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState('')

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      throw new Error('Please select the image file')
    }
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  return { imagePreviewUrl, handleImageChange }
}
