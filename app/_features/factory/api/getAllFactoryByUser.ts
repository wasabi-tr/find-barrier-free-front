import { Factory } from '@/app/_common/types'

export const getAllFactoryByUser = async (
  userId: string
): Promise<Factory[]> => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/factory/user/?userId=${userId}`
    )
    const factories = await res.json()
    return factories
  } catch (error: any) {
    throw new Error(error)
  }
}
