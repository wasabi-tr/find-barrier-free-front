import React from 'react'
import { BuildingLibraryIcon } from '@heroicons/react/24/outline'
import { Feature } from '@/app/_common/types'
import { useQuery } from '@tanstack/react-query'
import Spinner from '../spinner'
import { getFeatures } from '@/app/_features/factory/api/getFeatures'

const FeaturesCheckBox = async () => {
  // const getFeatures = async () => {
  //   const res = await fetch('api/features')
  //   return await res.json()
  // }
  // const { data: features, isLoading } = useQuery<Feature[]>({
  //   queryKey: ['features'],
  //   queryFn: getFeatures,
  //   staleTime: Infinity,
  // })
  // if (isLoading) return <Spinner />
  const features = await getFeatures()
  //選択されたらクエリパラメータに含む？

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
                value={feature.slug}
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
