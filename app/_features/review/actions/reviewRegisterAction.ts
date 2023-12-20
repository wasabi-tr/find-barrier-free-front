'use server'
import { putImage } from '@/app/_common/libs/r2/storage'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const reviewFormSchema = z.object({
  title: z.string().min(1, { message: '入力してください' }),
  comment: z.string().min(1, { message: '入力してください' }),
  userId: z.string(),
  factoryId: z.string(),
  imageUrl: z.array(z.string().optional()),
})

type State = {
  errors?: {
    title?: string[]
    comment?: string[]
    userId?: string[]
    factoryId?: string[]
    imageUrl?: string[]
  }
  message: string | null
}
export const registerReviewAction = async (
  prevState: State,
  formData: FormData
): Promise<State> => {
  const imageFiles = formData.getAll('imageUrl') as File[]
  const reviewImageUrlsPromises = imageFiles.flatMap((imageFile) => {
    return imageFile.size ? [putImage(imageFile, 'factory')] : []
  })

  const reviewImageUrls = await Promise.all(reviewImageUrlsPromises)
  const reviewData = {
    title: formData.get('title'),
    comment: formData.get('comment'),
    userId: formData.get('userId'),
    factoryId: formData.get('factoryId'),
    imageUrl: reviewImageUrls,
  }
  const validatedFields = reviewFormSchema.safeParse(reviewData)
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'エラーが発生しました。',
    }
  }
  console.log(validatedFields.data)

  try {
    console.log()

    // const res = await createFactory(validatedFields.data)
    // revalidatePath('/factory')
    // redirect('/factory')
  } catch (error) {
    return {
      message: '施設の登録に失敗しました。',
    }
  }
}
