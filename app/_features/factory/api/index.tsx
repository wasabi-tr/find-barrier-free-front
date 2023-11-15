import { EditedFactory, Factory } from '@/app/_common/types'

export const getAllFactory = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/factory`, {
      credentials: 'include',
    })
    const factories = await res.json()
    return factories
  } catch (error: any) {
    throw new Error(error)
  }
}

export const createFactory = async (
  factory: Omit<
    EditedFactory,
    'id' | 'genres' | 'factoryToAccessibilityFeature'
  >
) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/factory`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(factory),
    })

    return await res.json()
  } catch (error: any) {
    throw new Error(error)
  }
}

export const updateFactory = async (factory: EditedFactory) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/factory`, {
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify(factory),
    })

    return await res.json()
  } catch (error: any) {
    throw new Error(error)
  }
}
