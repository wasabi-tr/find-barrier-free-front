import Map from '@/app/_components/ui-element/googleMap'
import Spinner from '@/app/_components/ui-parts/spinner'
import {
  getAllFactory,
  getFactoryById,
  getFactoryFeatures,
  getFactoryGenres,
} from '@/app/_features/factory/api'
import { FavoriteButton } from '@/app/_features/favorite/components/favoriteButtton'
import { getReviewsByFactoryId } from '@/app/_features/review/api'
import { auth } from '@/app/next-auth'
import { UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Suspense } from 'react'

export default async function FactoryDetail({
  params,
}: {
  params: { id: string }
}) {
  const factory = await getFactoryById(params.id)
  const reviews = await getReviewsByFactoryId(params.id)
  const genres = await getFactoryGenres(params.id)
  const features = await getFactoryFeatures(params.id)
  const session = await auth()

  const {
    id,
    name,
    title,
    description,
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

  // console.log(factory)

  return (
    <div>
      <div className="gap grid grid-cols-auto-min-300 gap-4">
        {imageUrl &&
          imageUrl.length > 0 &&
          imageUrl.map((image: string, index: number) => (
            <div key={index} className="w-full min-h-0 aspect-video">
              <Image
                src={image}
                width={600}
                height={400}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
      <section className="relative pb-4 border-b border-color-main-400 mt-8">
        <h1 className="font-semibold text-2xl">{name}</h1>
        <p className="mt-2">
          〒{zipcode}&nbsp;
          {`${prefecture}${city}${addressDetail}`}
        </p>
        <div className="">
          <FavoriteButton factoryId={id} />
        </div>
      </section>
      <section className="grid gap-2 mt-4">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p>{description}</p>
      </section>
      <div className="grid gap-16 mt-16">
        <section className="grid gap-2">
          <h2 className="font-semibold text-xl">施設の特徴</h2>
          <div className="">
            {features && features.length > 0 && (
              <ul className="flex gap-1 mt-2">
                {features.map((genre) => (
                  <li
                    key={genre.id}
                    className="py-1 px-4 bg-slate-200 rounded-lg text-sm"
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
        <section className="grid gap-2">
          <h2 className="font-semibold text-xl">目的</h2>
          <div className="">
            {genres && genres.length > 0 && (
              <ul className="flex gap-1 mt-2">
                {genres.map((genre) => (
                  <li
                    key={genre.id}
                    className="py-1 px-4 bg-slate-200 rounded-lg text-sm"
                  >
                    #{genre.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
        <section className="grid gap-2">
          <h2 className="font-semibold text-xl">口コミ</h2>
          <div className="">
            {reviews && reviews.length > 0 && (
              <ul className="flex flex-col gap-1 mt-2">
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
        </section>
        <section className="grid gap-2">
          <h2 className="font-semibold text-xl">施設の情報</h2>
          <div className="">
            <dl className="grid gap-2  border-b border-color-main-400 w-full py-5">
              <dt className="font-semibold">施設の名前</dt>
              <dd>{name}</dd>
            </dl>
            <dl className="grid gap-2  border-b border-color-main-400 w-full py-5">
              <dt className="font-semibold">住所</dt>
              <dd>
                <div className="">
                  <span>
                    〒{zipcode}&nbsp;
                    {`${prefecture}${city}${addressDetail}`}
                  </span>
                  <div className="relative aspect-video mt-2 rounded-md overflow-hidden">
                    <Suspense fallback={<Spinner />}>
                      <Map latLng={{ lat, lng }} />
                    </Suspense>
                  </div>
                </div>
              </dd>
            </dl>
            <dl className="grid gap-2  border-b border-color-main-400 w-full py-5">
              <dt className="font-semibold">電話番号</dt>
              <dd>{tel}</dd>
            </dl>
            <dl className="grid gap-2  border-b border-color-main-400 w-full py-5">
              <dt className="font-semibold">営業時間</dt>
              <dd>{businessHours}</dd>
            </dl>
            <dl className="grid gap-2  border-b border-color-main-400 w-full py-5">
              <dt className="font-semibold">定休日</dt>
              <dd>{holidays}</dd>
            </dl>
            <dl className="grid gap-2  border-b border-color-main-400 w-full py-5">
              <dt className="font-semibold">WEBサイト</dt>
              <dd>{siteUrl}</dd>
            </dl>
          </div>
        </section>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const factories = await getAllFactory()

  return factories.map((factory) => ({
    id: factory.id,
  }))
}
