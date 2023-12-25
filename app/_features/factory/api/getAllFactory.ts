import { Factory } from '@/app/_common/types'

export const getAllFactory = async (): Promise<Factory[]> => {
  try {
    const res = await fetch(`${process.env.API_URL}/factory`)
    const factories = await res.json()

    return factories
  } catch (error: any) {
    throw new Error(error)
  }
}
