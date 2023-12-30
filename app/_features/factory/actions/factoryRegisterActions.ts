'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { putImage } from '@/app/_common/libs/r2/storage'
import { createFactory } from '../api/createFactory'

const factoryFormSchema = z.object({
  name: z.string().min(1, { message: '入力してください' }),
  title: z.string().min(1, { message: '入力してください' }),
  description: z.string().min(1, { message: '入力してください' }),
  zipcode: z.string().min(1, { message: '入力してください' }),
  prefecture: z.string().min(1, { message: '入力してください' }),
  city: z.string().min(1, { message: '入力してください' }),
  addressDetail: z.string().min(1, { message: '入力してください' }),
  tel: z.string(),
  businessHours: z.string(),
  holidays: z.string(),
  siteUrl: z.string(),
  imageUrl: z.array(z.string().optional()),
  genreIds: z.array(z.string().optional()),
  featureIds: z.array(z.string().optional()),
  userId: z.string(),
})

type State = {
  errors?: {
    name?: string[]
    title?: string[]
    description?: string[]
    zipcode?: string[]
    prefecture?: string[]
    city?: string[]
    addressDetail?: string[]
    tel?: string[]
    businessHours?: string[]
    holidays?: string[]
    siteUrl?: string[]
    imageUrl?: string[]
    userId?: string[]
    genreIds?: string[]
    featureIds?: string[]
  }
  message: string | null
}

export const actions = async (
  prevState: State,
  formData: FormData
): Promise<State> => {
  const imageFiles = formData.getAll('imageUrl') as File[]

  const factoryImageUrlsPromises = imageFiles.flatMap((imageFile) => {
    return imageFile.size ? [putImage(imageFile, 'factory')] : []
  })

  const factoryImageUrls = await Promise.all(factoryImageUrlsPromises)

  const factoryData = {
    name: formData.get('name'),
    title: formData.get('title'),
    description: formData.get('description'),
    zipcode: formData.get('zipcode'),
    prefecture: formData.get('prefecture'),
    city: formData.get('city'),
    addressDetail: formData.get('addressDetail'),
    tel: formData.get('tel'),
    businessHours: formData.get('businessHours'),
    holidays: formData.getAll('holidays').join('、'),
    siteUrl: formData.get('siteUrl'),
    imageUrl: factoryImageUrls,
    userId: formData.get('userId'),
    genreIds: formData.getAll('genreIds'),
    featureIds: formData.getAll('featureIds'),
  }

  const validatedFields = factoryFormSchema.safeParse(factoryData)
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'エラーが発生しました。',
    }
  }

  try {
    const res = await createFactory(validatedFields.data)
    revalidatePath('/dashboard/factory/')
    redirect('/dashboard/factory')
  } catch (error) {
    return {
      message: '施設の登録に失敗しました。',
    }
  }
}
