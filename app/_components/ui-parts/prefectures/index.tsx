import { getPrefectures } from '@/app/_features/factory/api/getPrefecture'
import { getAllRegion } from '@/app/_features/region/api/getAllRegion'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Prefectures = async () => {
  const prefectures = await getPrefectures()
  const regions = await getAllRegion()

  return (
    <>
      <h2 className="text-center font-bold text-lg ">都道府県から探す</h2>
      {regions?.map((region) => (
        <div
          className="flex gap-4  py-5 border-b border-color-main-400 sm:grid"
          key={region.id}
        >
          <h3 className="flex-shrink-0 basis-[23%] font-bold">{region.name}</h3>
          <ul className="flex gap-4 flex-wrap  flex-1">
            {prefectures
              ?.filter((prefecture) => prefecture.region.id === region.id)
              .map((prefecture) => (
                <li key={prefecture.id} className="checkbox-item">
                  <input
                    id={prefecture.id}
                    type="checkbox"
                    name="prefecture"
                    value={prefecture.slug}
                  />
                  <label htmlFor={prefecture.id}>
                    <span></span>
                    {prefecture.name}
                  </label>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export default Prefectures
