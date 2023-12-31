import React, { FC } from 'react'
import { FlagIcon } from '@heroicons/react/24/outline'
import { getGenres } from '@/app/_features/factory/api/getGenres'

export const PurposeSelector: FC = async () => {
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
          <option key={genre.id} value={genre.slug}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  )
}
