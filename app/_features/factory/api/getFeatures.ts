import { Feature } from '@/app/_common/types'

export const getFeatures = async (): Promise<Feature[]> => {
  try {
    const res = await fetch(`${process.env.API_URL}/factory/features/`)
    const features = await res.json()
    return features
  } catch (error: any) {
    throw new Error(error)
  }
}
