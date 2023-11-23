import { getFactoryGenres } from '@/app/_features/factory/api'
import React, { FC } from 'react'
import { FlagIcon } from '@heroicons/react/24/outline'

export const PurposeSelector: FC = async () => {
  const purposes = await getFactoryGenres()
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="purpose" className="flex items-center gap-2">
        <span>
          <FlagIcon className="h-6 w-6 text-color-main-800" />
        </span>
        目的
      </label>
      <select name="purpose" id="purpose" className="selector">
        {purposes.map((purpose) => (
          <option key={purpose.id} value={purpose.name}>
            {purpose.name}
          </option>
        ))}
      </select>
    </div>
  )
}
