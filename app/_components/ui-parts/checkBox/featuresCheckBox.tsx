import React from 'react'
import { BuildingLibraryIcon } from '@heroicons/react/24/outline'
import { getFeatures } from '@/app/_features/factory/api/getFeatures'

const FeaturesCheckBox = async () => {
  const features = await getFeatures()

  return (
    <div className="flex flex-col gap-2">
      <fieldset className="contents">
        <legend className="flex items-center gap-2">
          <span>
            <BuildingLibraryIcon className="h-6 w-6 text-color-main-800" />
          </span>
          施設の特徴
        </legend>
        <div className="flex flex-col gap-1">
          {features?.map((feature) => (
            <div key={feature.id} className="flex items-center gap-4 ">
              <input
                id={feature.id}
                type="checkbox"
                name="features"
                value={feature.name}
                className="w-4 h-4 border-gray-400 rounded  cursor-pointer accent-color-green-600"
              />
              <label htmlFor={feature.id} className="">
                {feature.name}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}

export default FeaturesCheckBox
