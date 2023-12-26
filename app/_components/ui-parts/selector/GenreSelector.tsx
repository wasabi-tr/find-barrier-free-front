import React, { FC } from 'react'
import { FlagIcon } from '@heroicons/react/24/outline'
import { getGenres } from '@/app/_features/factory/api/getGenres'
import { Genre } from '@/app/_common/types'
import { useQuery } from '@tanstack/react-query'
import Spinner from '../spinner'

export const PurposeSelector: FC = async () => {
  // const getGenres = async () => {
  //   const res = await fetch('api/genres')
  //   return await res.json()
  // }
  // const { data: genres, isLoading } = useQuery<Genre[]>({
  //   queryKey: ['genres'],
  //   queryFn: getGenres,
  //   staleTime: Infinity,
  // })

  // if (isLoading) return <Spinner />
  const genres = await getGenres()
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="purpose" className="flex items-center gap-2">
        <span>
          <FlagIcon className="h-6 w-6 text-color-main-800" />
        </span>
        目的
      </label>
      <select name="purpose" id="purpose" className="selector">
        {genres?.map((genre) => (
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  )
}
