import { getFeatures } from '@/app/_features/factory/api/getFeatures'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Features = async () => {
  const features = await getFeatures()
  return (
    <>
      <h2 className="text-center font-bold text-lg">施設の特徴</h2>
      <ul className="grid grid-cols-2 gap-4 flex-wrap mt-8">
        {features?.map((feature) => (
          <li key={feature.id} className="checkbox-item">
            <input
              id={feature.id}
              type="checkbox"
              name="features"
              value={feature.slug}
            />
            <label htmlFor={feature.id}>
              <span></span>
              {feature.name}
            </label>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Features
