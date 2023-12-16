'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

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
  // holidays: z.string(),
  siteUrl: z.string(),
  imageUrl: z.string(),
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
  }
  message: string | null
}
export const actions = async (
  prevState: State,
  formData: FormData
): Promise<State> => {
  const name = formData.get('name')
  const description = formData.get('description')
  const title = formData.get('title')
  const zipcode = formData.get('zipcode')
  const prefecture = formData.get('prefecture')
  const city = formData.get('city')
  const addressDetail = formData.get('addressDetail')
  const tel = formData.get('tel')
  const businessHours = formData.get('businessHours')
  const holidays = formData.get('holidays')
  const siteUrl = formData.get('siteUrl')
  const imageUrl = formData.get('imageUrl')

  const validatedFields = factoryFormSchema.safeParse({
    name,
    title,
    description,
    zipcode,
    prefecture,
    city,
    addressDetail,
    tel,
    businessHours,
    holidays,
    siteUrl,
    // imageUrl,
  })
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'エラーが発生しました。',
    }
  }

  try {
    // 施設を作成する処理
  } catch (error) {
    return {
      message: '施設の登録に失敗しました。',
    }
  }
  revalidatePath('/dashboard/factory/')
  redirect('/dashboard/factory')
}
