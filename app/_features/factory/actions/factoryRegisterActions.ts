import { z } from 'zod'

const factoryFormSchema = z.object({
  name: z.string().min(1, { message: '入力してください' }),
  description: z.string().min(1, { message: '入力してください' }),
})

export const actions = async (prevState: any, formData: FormData) => {
  const name = formData.get('name')
  const description = formData.get('name')
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

  console.log(formData)
}
