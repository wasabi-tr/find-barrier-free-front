import { dummyImagePath } from '@/app/_common/constants'
import { Factory } from '@/app/_common/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { UserIcon } from '@heroicons/react/24/solid'

type Props = {
  factory: Factory
}

const FactoryItem: FC<Props> = async ({ factory }) => {
  const {
    id,
    name,
    zipcode,
    prefecture,
    city,
    addressDetail,
    imageUrl,
    genres,
    reviews,
  } = factory

  return (
    <li>
      <Link
        href={`/factory/${id}`}
        className="flex items-start gap-2 relative p-8 border-2  rounded-2xl transition duration-300 bg-white hover:border-color-green-800 lg:block sm:rounded-lg"
      >
        <figure className="relative basis-[240px] w-[240px] aspect-3/2 min-h-0 mx-auto sm:w-full">
          <Image
            src={imageUrl[0] || dummyImagePath}
            alt={``}
            fill
            className="w-full h-auto object-contain"
          />
        </figure>
        <div className="flex-1 w-full sm:mt-3">
          <p className="font-semibold">{name}</p>
          <p className="sm:text-sm">
            〒{zipcode}&nbsp;
            {`${prefecture.name}${city}${addressDetail}`}
          </p>
          {genres && genres.length > 0 && (
            <ul className="flex gap-1 mt-2">
              {genres.map((genre) => (
                <li
                  key={genre.genre.id}
                  className="py-1 px-4 bg-slate-200 rounded-lg text-sm sm:rounded"
                >
                  #{genre.genre.name}
                </li>
              ))}
            </ul>
          )}
          {reviews && reviews.length > 0 && (
            <ul className="flex flex-col gap-1 mt-2 max-h-[250px] overflow-y-scroll">
              {reviews.map((review) => (
                <li
                  key={review.id}
                  className="flex gap-2 py-2 px-4 bg-color-main-200 rounded-md"
                >
                  <div className="flex items-center justify-center shrink-0  w-8 h-8 rounded-full bg-color-main-100  ">
                    {review.user.avatarUrl ? (
                      <Image
                        src={review.user.avatarUrl}
                        alt=""
                        width={20}
                        height={20}
                        className="w-6 h-6 object-cover"
                      />
                    ) : (
                      <UserIcon className="w-6 h-6 text-color-main-400" />
                    )}
                  </div>
                  <div className="">
                    <p className="font-semibold">{review.title}</p>
                    <p className="text-sm">{review.comment}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </li>
  )
}

export default FactoryItem
