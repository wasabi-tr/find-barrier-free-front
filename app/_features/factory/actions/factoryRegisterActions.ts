'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const factoryFormSchema = z.object({
  name: z.string().min(1, { message: '入力してください' }),
  description: z.string().min(1, { message: '入力してください' }),
})

type State = {
  errors?: {
    name?: string[]
    description?: string[]
  }
  message: string | null
}
export const actions = async (
  prevState: State,
  formData: FormData
): Promise<State> => {
  const name = formData.get('name')
  const description = formData.get('description')
  const validatedFields = factoryFormSchema.safeParse({
    name,
    description,
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
