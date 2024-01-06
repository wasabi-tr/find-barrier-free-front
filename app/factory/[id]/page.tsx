import Container from '@/app/_components/layouts/container'
import Map from '@/app/_components/ui-element/googleMap'
import Spinner from '@/app/_components/ui-parts/spinner'
import { getAllFactory } from '@/app/_features/factory/api/getAllFactory'
import { getFactoryById } from '@/app/_features/factory/api/getFactoryById'
import { FavoriteButton } from '@/app/_features/favorite/components/favoriteButtton'
import {
  ChatBubbleLeftEllipsisIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export default async function FactoryDetail({
  params,
}: {
  params: { id: string }
}) {
  const factory = await getFactoryById(params.id)

  if (!factory) {
    return notFound()
  }

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
    genres,
    features,
    reviews,
  } = factory

  return (
    <div className="bg-color-main-50 py-8">
      <Container narrow>
        <div className="p-10 bg-white rounded-2xl">
          <div className="gap grid grid-cols-auto-min-300 gap-4 ">
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
              {`${prefecture.name}${city}${addressDetail}`}
            </p>
            {features && features.length > 0 && (
              <dl className="flex items-center gap-2 mt-2">
                <dt className="text-xs">施設の特徴：</dt>
                <dd>
                  <ul className="flex gap-1 ">
                    {features.map((feature) => (
                      <li
                        key={feature.feature.id}
                        className="py-1 px-4 bg-slate-200 rounded text-xs"
                      >
                        {feature.feature.name}
                      </li>
                    ))}
                  </ul>
                </dd>
              </dl>
            )}
            {genres && genres.length > 0 && (
              <dl className="flex items-center gap-2 mt-2">
                <dt className="text-xs">目的：</dt>
                <dd>
                  <ul className="flex gap-1">
                    {genres.map((genre) => (
                      <li
                        key={genre.genre.id}
                        className="py-1 px-4 bg-slate-200 rounded text-xs"
                      >
                        #{genre.genre.name}
                      </li>
                    ))}
                  </ul>
                </dd>
              </dl>
            )}
            <div className="absolute top-0 right-0 flex gap-2">
              <Link
                href={`/review/register?id=${id}`}
                className=" p-2 rounded-full transition border border-color-main-200 hover:bg-color-main-200"
              >
                <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-color-main-600" />
              </Link>
              <FavoriteButton factoryId={id} />
            </div>
          </section>
          <section className="grid gap-2 mt-4 bg-color-main-200 p-4 rounded">
            <h2 className="font-semibold text-lg">{title}</h2>
            <p>{description}</p>
          </section>
          <div className="grid gap-20 mt-20">
            <section className="grid gap-2">
              <h2 className="font-semibold text-xl">口コミ</h2>
              <div>
                {reviews && reviews.length > 0 ? (
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
                        <div>
                          <p className="font-semibold">{review.title}</p>
                          <p className="text-sm">{review.comment}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>投稿されている口コミはありません</p>
                )}
              </div>
            </section>
            <section className="grid gap-2 ">
              <h2 className="font-semibold text-xl">施設の情報</h2>
              <div>
                <dl className="flex gap-2  border-b border-color-main-400 w-full py-5">
                  <dt className="shrink-0 basis-1/3 font-semibold">
                    施設の名前
                  </dt>
                  <dd className="flex-1">{name}</dd>
                </dl>
                <dl className="flex gap-2  border-b border-color-main-400 w-full py-5">
                  <dt className="shrink-0 basis-1/3 font-semibold">住所</dt>
                  <dd className="flex-1">
                    <div>
                      <span>
                        〒{zipcode}&nbsp;
                        {`${prefecture.name}${city}${addressDetail}`}
                      </span>
                      <div className="relative aspect-video mt-2 rounded-md overflow-hidden">
                        <Suspense fallback={<Spinner />}>
                          <Map latLng={{ lat, lng }} />
                        </Suspense>
                      </div>
                    </div>
                  </dd>
                </dl>
                {tel && (
                  <dl className="flex gap-2  border-b border-color-main-400 w-full py-5">
                    <dt className="shrink-0 basis-1/3 font-semibold">
                      電話番号
                    </dt>
                    <dd className="flex-1">{tel}</dd>
                  </dl>
                )}
                {businessHours && (
                  <dl className="flex gap-2  border-b border-color-main-400 w-full py-5">
                    <dt className="shrink-0 basis-1/3 font-semibold">
                      営業時間
                    </dt>
                    <dd className="flex-1">{businessHours}</dd>
                  </dl>
                )}
                {holidays && (
                  <dl className="flex gap-2  border-b border-color-main-400 w-full py-5">
                    <dt className="shrink-0 basis-1/3 font-semibold">定休日</dt>
                    <dd className="flex-1">{holidays}</dd>
                  </dl>
                )}
                {siteUrl && (
                  <dl className="flex gap-2  border-b border-color-main-400 w-full py-5">
                    <dt className="shrink-0 basis-1/3 font-semibold">
                      WEBサイト
                    </dt>
                    <dd className="flex-1">{siteUrl}</dd>
                  </dl>
                )}
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}

export async function generateStaticParams() {
  const factories = await getAllFactory()

  return factories.map((factory) => ({
    id: factory.id,
  }))
}
