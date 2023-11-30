'use client'
import React, { useEffect, useState, useTransition } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { getFavorite } from '../../api'
import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { options } from '@/app/options'
import { favoriteActions } from '@/app/_components/functional/actons/favoriteActions'

export const FavoriteButton = ({ factoryId }: { factoryId: string }) => {
  // const data = await getServerSession(options)
  // const userId = data?.user.id
  const session = useSession()
  const [favorite, setFavorite] = useState(false)
  console.log(favorite)

  const [isPending, startTransition] = useTransition()

  const handleClick = async () => {
    startTransition(async () => {
      const test = await favoriteActions(session.data?.user.id, factoryId)
      setFavorite(test)
    })
  }
  //初回アクセス時にどのように制御するか検討

  return (
    <button
      className="p-2 rounded-full transition hover:bg-slate-200"
      onClick={handleClick}
    >
      <StarIcon
        className={`w-6 h-6  ${
          favorite ? 'text-yellow-400' : 'text-color-main-400'
        }`}
      />
    </button>
  )
}
