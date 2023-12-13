import { EditedFactory, Factory, Feature, Genre } from '@/app/_common/types'
import { getAllCookies } from '@/app/_components/functional/cookie'
import { cookies } from 'next/headers'

export const getAllFactory = async (): Promise<Factory[]> => {
  try {
    const res = await fetch(`${process.env.API_URL}/factory`)
    const factories = await res.json()

    return factories
  } catch (error: any) {
    throw new Error(error)
  }
}

export const getFactoryById = async (id: string): Promise<Factory> => {
  try {
    const res = await fetch(`${process.env.API_URL}/factory/${id}`)
    const factory = await res.json()
    return factory
  } catch (error: any) {
    throw new Error(error)
  }
}

export const createFactory = async (
  factory: Omit<EditedFactory, 'id' | 'genreIds' | 'featureIds'>
) => {
  try {
    // const cookie = getAllCookies()
    const cookieStore = cookies()
    const theme = cookieStore.get('next-auth.session-token')
    const bearer = theme?.value
    console.log(bearer)

    const res = await fetch(`${process.env.API_URL}/factory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearer}`,
      },
      body: JSON.stringify(factory),
    })

    return await res.json()
  } catch (error: any) {
    throw new Error(error)
  }
}

export const updateFactory = async (factory: EditedFactory) => {
  try {
    const cookie = getAllCookies()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/factory`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        cookie,
      },
      body: JSON.stringify(factory),
    })

    return await res.json()
  } catch (error: any) {
    throw new Error(error)
  }
}

export const deleteFactory = async (id: string) => {
  try {
    const cookie = getAllCookies()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/factory`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        cookie,
      },
      body: JSON.stringify({ id }),
    })

    return await res.json()
  } catch (error: any) {
    throw new Error(error)
  }
}

export const getGenres = async (): Promise<Genre[]> => {
  try {
    const res = await fetch(`${process.env.API_URL}/factory/genres`)
    const genres = await res.json()
    return genres
  } catch (error: any) {
    throw new Error(error)
  }
}
export const getFactoryGenres = async (factoryId: string): Promise<Genre[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/factory/genre/${factoryId}`
    )
    const genres = await res.json()
    return genres
  } catch (error: any) {
    throw new Error(error)
  }
}
export const getFeatures = async (): Promise<Feature[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/factory/features/`
    )
    const features = await res.json()
    return features
  } catch (error: any) {
    throw new Error(error)
  }
}
export const getFactoryFeatures = async (
  factoryId: string
): Promise<Feature[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/factory/feature/${factoryId}`
    )
    const features = await res.json()
    return features
  } catch (error: any) {
    throw new Error(error)
  }
}
