'use server'
import { z } from 'zod'
// import { updateUser } from '@/app/_features/user/api'
import { putImage } from '@/app/_common/libs/r2/storage'
import { authHeaderServerComponents } from '@/app/_components/functional/authHeader'
const NickNameSchema = z.object({
  nickName: z.string().min(1, { message: '1文字以上入力してください' }),
})

export const updateUser = async ({
  id,
  nickName,
  description,
  avatarUrl,
}: {
  id: string
  nickName?: string
  description?: string
  avatarUrl?: string
}) => {
  const authorization = authHeaderServerComponents()
  const res = await fetch(`${process.env.API_URL}/user`, {
    method: 'PATCH',
    headers: {
      ...authorization,
    },
    body: JSON.stringify({ id, nickName, description, avatarUrl }),
  })
  if (!res.ok) return

  const responseUser = await res.json()
  return responseUser
}

export const updateNickName = async (prevState: any, formData: FormData) => {
  const id = formData.get('id') as string
  const nickName = formData.get('nickName') as string
  const validatedFields = NickNameSchema.safeParse({
    nickName,
  })
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'エラーが発生しました。',
    }
  }
  const updateUserDto = {
    id,
    nickName,
  }
  try {
    const res = await updateUser(updateUserDto)
    return {
      message: 'ユーザーネームを更新しました',
    }
  } catch (error) {
    return {
      message:
        '予期しないエラーが発生しました。リロードして再度ユーザーネームを更新してください。',
    }
  }
}

const descriptionSchema = z.object({
  description: z.string(),
})

export const updateDescription = async (prevState: any, formData: FormData) => {
  const id = formData.get('id') as string
  const description = formData.get('description') as string
  const validatedFields = descriptionSchema.safeParse({
    description,
  })
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'エラーが発生しました。',
    }
  }
  const updateUserDto = {
    id,
    description,
  }
  try {
    const res = await updateUser(updateUserDto)
    return {
      message: '自己紹介を更新しました',
    }
  } catch (error) {
    return {
      message:
        '予期しないエラーが発生しました。リロードして再度自己紹介を更新してください。',
    }
  }
}

export const updateAvatar = async (prevState: any, formData: FormData) => {
  const id = formData.get('id') as string
  const avatar = formData.get('avatar') as File

  if (avatar) {
    const avatarUrl = await putImage(avatar, 'avatar')

    const updateUserDto = {
      id,
      avatarUrl,
    }
    try {
      const res = await updateUser(updateUserDto)
      return {
        message: 'プロフィール画像を更新しました',
      }
    } catch (error) {
      return {
        message:
          '予期しないエラーが発生しました。リロードして再度自己紹介を更新してください',
      }
    }
  }
}
