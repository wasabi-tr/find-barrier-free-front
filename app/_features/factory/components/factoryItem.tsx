import { dummyImagePath } from '@/app/_common/constants'
import { Factory } from '@/app/_common/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

type Props = {
  factory: Factory
}

const FactoryItem: FC<Props> = ({ factory }) => {
  console.log(factory)
  const {
    id,
    name,
    zipcode,
    prefecture,
    city,
    addressDetail,
    lat,
    lng,
    tel,
    businessHours,
    holidays,
    siteUrl,
    imageUrl,
  } = factory

  return (
    <li>
      <Link
        href={`/factory/detail/${id}`}
        className="flex gap-2 p-4 transition duration-300 border-b border-color-main-400  hover:bg-color-main-200"
      >
        <figure className="relative basis-[240px] w-[240px] aspect-video min-h-0 ">
          <Image
            src={imageUrl[0] || dummyImagePath}
            alt={`test`}
            fill
            className="w-full h-auto object-contain"
          />
        </figure>
        <div className="flex-1">
          <p className="font-semibold">{name}</p>
          <p>
            〒{zipcode}&nbsp;
            {`${prefecture}${city}${addressDetail}`}
          </p>
        </div>
      </Link>
    </li>
  )
}

export default FactoryItem
