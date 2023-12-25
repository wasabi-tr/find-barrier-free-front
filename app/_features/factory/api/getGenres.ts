import { Genre } from '@/app/_common/types'

export const getGenres = async (): Promise<Genre[]> => {
  try {
    const res = await fetch(`${process.env.API_URL}/factory/genres`)
    const genres = await res.json()
    return genres
  } catch (error: any) {
    throw new Error(error)
  }
}
