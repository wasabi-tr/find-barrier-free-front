import { Region } from '@/app/_common/types'

export const getAllRegion = async (): Promise<Region[]> => {
  try {
    const res = await fetch(`${process.env.API_URL}/region`)
    const regions = await res.json()
    return regions
  } catch (error: any) {
    throw new Error(error)
  }
}
