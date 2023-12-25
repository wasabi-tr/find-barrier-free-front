import { Factory } from '@/app/_common/types'

export const getFactoryById = async (id: string): Promise<Factory> => {
  try {
    const res = await fetch(`${process.env.API_URL}/factory/${id}`)
    const factory = await res.json()
    return factory
  } catch (error: any) {
    throw new Error(error)
  }
}
