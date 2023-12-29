import { Genre, Prefecture } from '@/app/_common/types'

export const getPrefectures = async (): Promise<Prefecture[]> => {
  try {
    const res = await fetch(`${process.env.API_URL}/factory/prefectures`)
    const prefecture = await res.json()
    return prefecture
  } catch (error: any) {
    throw new Error(error)
  }
}
