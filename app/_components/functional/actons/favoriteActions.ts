'use server'

import { getFavorite, switchFavorite } from '@/app/_features/favorite/api'

export const favoriteActions = async (userId: string, factoryId: string) => {
  const dbFavorite = await getFavorite(userId, factoryId)
  console.log(dbFavorite)
  if (dbFavorite) {
    await switchFavorite({ method: 'DELETE', userId, factoryId })
    return false
  } else {
    await switchFavorite({ method: 'POST', userId, factoryId })
    console.log('create')
    return true
  }
}
export const getFavoriteActions = async (userId: string, factoryId: string) => {
  return await getFavorite(userId, factoryId)
}
