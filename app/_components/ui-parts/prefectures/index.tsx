import { Prefecture, Region } from '@/app/_common/types'
import { getPrefectures } from '@/app/_features/factory/api/getPrefecture'
import { getAllRegion } from '@/app/_features/region/api/getAllRegion'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Prefectures = async () => {
  const prefectures = await getPrefectures()
  const regions = await getAllRegion()

  return (
    <form
      action="factory"
      method="GET"
      className=""
      aria-label="都道府県から施設を検索する"
    >
      <h2 className="text-center font-bold ">都道府県から探す</h2>
      {regions?.map((region) => (
        <div
          className="flex gap-4  py-5 border-b border-color-main-400"
          key={region.id}
        >
          <h3 className="flex-shrink-0 basis-[23%]">{region.name}</h3>
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
      <div className="max-w-xs mt-12 mx-auto">
        <button className="flex items-center gap-3 justify-center w-full py-5 px-8 rounded-md bg-color-green-600 text-white transition duration-300 hover:bg-color-green-800 ">
          検索
          <span>
            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
          </span>
        </button>
      </div>
    </form>
  )
}

export default Prefectures
