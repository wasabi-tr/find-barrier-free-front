import React, { FC } from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { getPrefectures } from '@/app/_features/factory/api/getPrefecture'

export const AreaSelector: FC = async () => {
  const prefectures = await getPrefectures()
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="area" className="flex items-center gap-2">
        <span>
          <MapPinIcon className="h-6 w-6 text-color-main-800" />
        </span>
        地域
      </label>
      <select
        name="area"
        id="area"
        className="selector"
        defaultValue={'東京都'}
      >
        {prefectures.map((prefecture) => (
          <option key={prefecture.id} value={prefecture.slug}>
            {prefecture.name}
          </option>
        ))}
      </select>
    </div>
  )
}
