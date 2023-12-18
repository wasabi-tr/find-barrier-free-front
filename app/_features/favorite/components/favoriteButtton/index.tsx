'use client'
import React, { use, useEffect, useState, useTransition } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'
import {
  favoriteActions,
  getFavoriteActions,
} from '@/app/_components/functional/actions/favoriteActions'

export const FavoriteButton = ({ factoryId }: { factoryId: string }) => {
  const session = useSession()
  const [favorite, setFavorite] = useState(false)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    startTransition(async () => {
      const dbFavorite = await getFavoriteActions(
        session.data?.user.id,
        factoryId
      )
      setFavorite(dbFavorite)
    })
  }, [])

  const handleClick = () => {
    startTransition(async () => {
      const dbFavorite = await favoriteActions(session.data?.user.id, factoryId)
      setFavorite(dbFavorite)
    })
  }

  return (
    <button
      className="p-2 rounded-full transition border border-color-main-200 hover:bg-color-main-200"
      onClick={handleClick}
      aria-label="お気に入りに登録する"
    >
      <StarIcon
        className={`w-6 h-6  ${
          favorite ? 'text-yellow-400' : 'text-color-main-400'
        }`}
      />
    </button>
  )
}
