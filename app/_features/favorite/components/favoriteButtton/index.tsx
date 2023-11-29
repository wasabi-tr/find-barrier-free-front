import React, { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { getFavorite } from '../../api'
import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { options } from '@/app/options'

export const FavoriteButton = async ({ factoryId }: { factoryId: string }) => {
  const data = await getServerSession(options)
  const userId = data?.user.id
  const favorite = await getFavorite(userId, factoryId)
  const handleClick = () => {
    console.log('click')
  }
  return (
    <button className="p-2 rounded-full transition hover:bg-slate-200">
      <StarIcon className="w-6 h-6 text-color-main-400" />
    </button>
  )
}
