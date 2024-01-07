import { getFeatures } from '@/app/_features/factory/api/getFeatures'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Features = async () => {
  const features = await getFeatures()
  return (
    <form
      action="factory"
      method="GET"
      className=""
      aria-label="施設の特徴から検索する"
    >
      <h2 className="text-center font-bold ">施設の特徴</h2>
      <ul className="grid grid-cols-2 gap-4 flex-wrap mt-8">
        {features?.map((feature) => (
          <li key={feature.id} className="checkbox-item">
            <input
              id={feature.id}
              type="checkbox"
              name="features"
              value={feature.slug}
              className=""
            />
            <label htmlFor={feature.id} className="">
              <span></span>
              {feature.name}
            </label>
          </li>
        ))}
      </ul>
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

export default Features
