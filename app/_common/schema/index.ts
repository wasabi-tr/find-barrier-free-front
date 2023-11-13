import { z } from 'zod'

export const loginSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, { message: '8文字以上で入力してください' }),
  })
  .required()

export type LoginSchemaType = z.infer<typeof loginSchema>
