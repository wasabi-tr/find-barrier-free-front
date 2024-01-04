'use client'
import { useFormState, useFormStatus } from 'react-dom'
import { actions } from '../actions/factoryRegisterActions'
import { usePreviewImage } from '@/app/_common/hooks/usePreviewImage'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Feature, Genre, Prefecture } from '@/app/_common/types'

const initialState = {
  errors: {},
  message: null,
}
const prefectures = [
  { name: '北海道', slug: 'hokkaido' },
  { name: '青森県', slug: 'aomori' },
  { name: '岩手県', slug: 'iwate' },
  { name: '宮城県', slug: 'miyagi' },
  { name: '秋田県', slug: 'akita' },
  { name: '山形県', slug: 'yamagata' },
  { name: '福島県', slug: 'fukushima' },
  { name: '茨城県', slug: 'ibaraki' },
  { name: '栃木県', slug: 'tochigi' },
  { name: '群馬県', slug: 'gunma' },
  { name: '埼玉県', slug: 'saitama' },
  { name: '千葉県', slug: 'chiba' },
  { name: '東京都', slug: 'tokyo' },
  { name: '神奈川県', slug: 'kanagawa' },
  { name: '新潟県', slug: 'niigata' },
  { name: '富山県', slug: 'toyama' },
  { name: '石川県', slug: 'ishikawa' },
  { name: '福井県', slug: 'fukui' },
  { name: '山梨県', slug: 'yamanashi' },
  { name: '長野県', slug: 'nagano' },
  { name: '岐阜県', slug: 'gifu' },
  { name: '静岡県', slug: 'shizuoka' },
  { name: '愛知県', slug: 'aichi' },
  { name: '三重県', slug: 'mie' },
  { name: '滋賀県', slug: 'shiga' },
  { name: '京都府', slug: 'kyoto' },
  { name: '大阪府', slug: 'osaka' },
  { name: '兵庫県', slug: 'hyogo' },
  { name: '奈良県', slug: 'nara' },
  { name: '和歌山県', slug: 'wakayama' },
  { name: '鳥取県', slug: 'tottori' },
  { name: '島根県', slug: 'shimane' },
  { name: '岡山県', slug: 'okayama' },
  { name: '広島県', slug: 'hiroshima' },
  { name: '山口県', slug: 'yamaguchi' },
  { name: '徳島県', slug: 'tokushima' },
  { name: '香川県', slug: 'kagawa' },
  { name: '愛媛県', slug: 'ehime' },
  { name: '高知県', slug: 'kochi' },
  { name: '福岡県', slug: 'fukuoka' },
  { name: '佐賀県', slug: 'saga' },
  { name: '長崎県', slug: 'nagasaki' },
  { name: '熊本県', slug: 'kumamoto' },
  { name: '大分県', slug: 'oita' },
  { name: '宮崎県', slug: 'miyazaki' },
  { name: '鹿児島県', slug: 'kagoshima' },
  { name: '沖縄県', slug: 'okinawa' },
]
const week = [
  { value: '月曜日', id: 'monday' },
  { value: '火曜日', id: 'tuesday' },
  { value: '水曜日', id: 'wednesday' },
  { value: '木曜日', id: 'thursday' },
  { value: '金曜日', id: 'friday' },
  { value: '土曜日', id: 'saturday' },
  { value: '日曜日', id: 'sunday' },
]
export const RegisterForm = () => {
  const session = useSession()
  const userId = session.data?.user.id
  const { pending } = useFormStatus()
  const { imagePreviewUrl, handleImageChange } = usePreviewImage()
  const [state, register] = useFormState(actions, initialState)
  const [genres, setGenres] = useState<Genre[]>([])
  const [features, setFeatures] = useState<Feature[]>([])

  useEffect(() => {
    const getData = async () => {
      const genresRes = await fetch('/api/factory/genres')
      const genresData = await genresRes.json()
      const featuresRes = await fetch('/api/factory/features')
      const featuresData = await featuresRes.json()
      setGenres(genresData)
      setFeatures(featuresData)
    }
    getData()
  }, [])

  return (
    <div>
      <h2 className="text-xl font-semibold">施設の情報を登録する</h2>
      <form action={register} className="mt-10">
        <div className="grid gap-10">
          <div className="relative flex flex-col items-start gap-2  ">
            <label htmlFor="name" className="flex items-center gap-2 ">
              施設名<span className="text-sm text-red-600  ">必須</span>
            </label>
            <div className="relative w-full">
              <input
                id="name"
                name="name"
                type="text"
                className={`p-4 rounded-lg bg-white w-full ${
                  state?.errors?.name
                    ? 'border-2 border-red-600'
                    : 'border border-color-main-600'
                }`}
                aria-describedby="name-error"
              />
            </div>
            {state?.errors?.name && (
              <p
                id="name-error"
                className="text-red-600 text-sm"
                aria-live="polite"
              >
                {state.errors.name}
              </p>
            )}
          </div>

          <div className="relative flex flex-col items-start gap-2  ">
            <label htmlFor="title" className="flex items-center gap-2 ">
              タイトル<span className="text-sm text-red-600">必須</span>
            </label>
            <div className="relative w-full">
              <input
                id="title"
                name="title"
                type="text"
                className={`p-4 rounded-lg bg-white w-full ${
                  state?.errors?.title
                    ? 'border-2 border-red-600'
                    : 'border border-color-main-600'
                }`}
                aria-describedby="title-error"
              />
            </div>
            {state?.errors?.title && (
              <p
                id="title-error"
                className="text-red-600 text-sm"
                aria-live="polite"
              >
                {state.errors.title}
              </p>
            )}
          </div>
          <div className="relative flex flex-col items-start gap-2  ">
            <label htmlFor="description" className="flex items-center gap-2 ">
              施設の説明<span className="text-sm text-red-600">必須</span>
            </label>
            <div className="relative w-full ">
              <textarea
                id="description"
                name="description"
                className={`p-4 rounded-lg bg-white w-full h-[500px] ${
                  state?.errors?.description
                    ? 'border-2 border-red-600'
                    : 'border border-color-main-600'
                }`}
                aria-describedby="description-error"
              />
            </div>
            {state?.errors?.description && (
              <p
                id="description-error"
                className="text-red-600 text-sm"
                aria-live="polite"
              >
                {state.errors.description}
              </p>
            )}
          </div>

          <div className="relative flex flex-col items-start gap-2  ">
            <label htmlFor="zipcode" className="flex items-center gap-2 ">
              郵便番号<span className="text-sm text-red-600">必須</span>
            </label>
            <div className="relative w-[320px]">
              <input
                id="zipcode"
                name="zipcode"
                type="text"
                className={`p-4 rounded-lg bg-white w-full ${
                  state?.errors?.zipcode
                    ? 'border-2 border-red-600'
                    : 'border border-color-main-600'
                }`}
                aria-describedby="zipcode-error"
              />
            </div>
            {state?.errors?.zipcode && (
              <p
                id="zipcode-error"
                className="text-red-600 text-sm"
                aria-live="polite"
              >
                {state.errors.zipcode}
              </p>
            )}
          </div>
          <div className="relative flex flex-col items-start gap-2  ">
            <label htmlFor="prefecture" className="flex items-center gap-2 ">
              都道府県<span className="text-sm text-red-600">必須</span>
            </label>
            <div className="relative w-[320px]">
              <select
                name="prefecture"
                id="prefecture"
                className={`p-4 rounded-lg bg-white w-full ${
                  state?.errors?.prefecture
                    ? 'border-2 border-red-600'
                    : 'border border-color-main-600'
                }`}
                aria-describedby="prefecture-error"
              >
                {prefectures.map((prefecture) => (
                  <option key={prefecture.slug} value={prefecture.slug}>
                    {prefecture.name}
                  </option>
                ))}
              </select>
            </div>
            {state?.errors?.prefecture && (
              <p
                id="prefecture-error"
                className="text-red-600 text-sm"
                aria-live="polite"
              >
                {state.errors.prefecture}
              </p>
            )}
          </div>
          <div className="relative flex flex-col items-start gap-2  ">
            <label htmlFor="city" className="flex items-center gap-2 ">
              市町村区<span className="text-sm text-red-600">必須</span>
            </label>
            <div className="relative w-[320px]">
              <input
                id="city"
                name="city"
                type="text"
                className={`p-4 rounded-lg bg-white w-full ${
                  state?.errors?.city
                    ? 'border-2 border-red-600'
                    : 'border border-color-main-600'
                }`}
                aria-describedby="city-error"
              />
            </div>
            {state?.errors?.city && (
              <p
                id="city-error"
                className="text-red-600 text-sm"
                aria-live="polite"
              >
                {state.errors.city}
              </p>
            )}
          </div>
          <div className="relative flex flex-col items-start gap-2  ">
            <label htmlFor="addressDetail" className="flex items-center gap-2 ">
              番地以降の住所<span className="text-sm text-red-600">必須</span>
            </label>
            <div className="relative w-[320px]">
              <input
                id="addressDetail"
                name="addressDetail"
                type="text"
                className={`p-4 rounded-lg bg-white w-full ${
                  state?.errors?.addressDetail
                    ? 'border-2 border-red-600'
                    : 'border border-color-main-600'
                }`}
                aria-describedby="addressDetail-error"
              />
            </div>
            {state?.errors?.addressDetail && (
              <p
                id="addressDetail-error"
                className="text-red-600 text-sm"
                aria-live="polite"
              >
                {state.errors.addressDetail}
              </p>
            )}
          </div>
          <div className="relative flex flex-col items-start gap-2  ">
            <label htmlFor="tel" className="flex items-center gap-2 ">
              電話番号
            </label>
            <div className="relative w-[320px]">
              <input
                id="tel"
                name="tel"
                type="text"
                className={`p-4 rounded-lg bg-white w-full ${
                  state?.errors?.tel
                    ? 'border-2 border-red-600'
                    : 'border border-color-main-600'
                }`}
                aria-describedby="tel-error"
              />
            </div>
            {state?.errors?.tel && (
              <p
                id="tel-error"
                className="text-red-600 text-sm"
                aria-live="polite"
              >
                {state.errors.tel}
              </p>
            )}
          </div>
          <div className="relative flex flex-col items-start gap-2  ">
            <label htmlFor="businessHours" className="flex items-center gap-2 ">
              営業時間
            </label>
            <div className="relative w-[500px] ">
              <textarea
                id="businessHours"
                name="businessHours"
                className={`p-4 rounded-lg bg-white w-full h-[300px] ${
                  state?.errors?.businessHours
                    ? 'border-2 border-red-600'
                    : 'border border-color-main-600'
                }`}
                aria-describedby="businessHours-error"
              />
            </div>
            {state?.errors?.businessHours && (
              <p
                id="businessHours-error"
                className="text-red-600 text-sm"
                aria-live="polite"
              >
                {state.errors.businessHours}
              </p>
            )}
          </div>
          <div className="relative flex flex-col items-start gap-2  ">
            <label htmlFor="holidays" className="flex items-center gap-2 ">
              定休日
            </label>
            <div className="relative w-full">
              <div className="flex flex-col gap-2">
                {week.map((day) => (
                  <div key={day.id} className="flex items-center gap-2">
                    <input
                      id={`holiday-${day.id}`}
                      name="holidays"
                      type="checkbox"
                      className="p-4 rounded-lg bg-white w-4 h-4"
                      value={day.value}
                    />
                    <label
                      htmlFor={`holiday-${day.id}`}
                      className="cursor-pointer"
                    >
                      {day.value}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {state?.errors?.holidays && (
              <p
                id="holidays-error"
                className="text-red-600 text-sm"
                aria-live="polite"
              >
                {state.errors.holidays}
              </p>
            )}
          </div>
          <div className="relative flex flex-col items-start gap-2  ">
            <label htmlFor="siteUrl" className="flex items-center gap-2 ">
              サイトURL
            </label>
            <div className="relative w-[320px]">
              <input
                id="siteUrl"
                name="siteUrl"
                type="text"
                className={`p-4 rounded-lg bg-white w-full ${
                  state?.errors?.siteUrl
                    ? 'border-2 border-red-600'
                    : 'border border-color-main-600'
                }`}
                aria-describedby="siteUrl-error"
              />
            </div>
            {state?.errors?.siteUrl && (
              <p
                id="siteUrl-error"
                className="text-red-600 text-sm"
                aria-live="polite"
              >
                {state.errors.siteUrl}
              </p>
            )}
          </div>
          <div className="relative flex flex-col items-start gap-2  ">
            <label htmlFor="genreIds" className="flex items-center gap-2 ">
              目的
            </label>
            <div className="relative w-full">
              <div className="flex flex-col gap-2">
                {genres.map((genre) => (
                  <div key={genre.id} className="flex items-center gap-2">
                    <input
                      id={`genre-${genre.id}`}
                      name="genreIds"
                      type="checkbox"
                      className="p-4 rounded-lg bg-white w-4 h-4"
                      value={genre.id}
                    />
                    <label
                      htmlFor={`genre-${genre.id}`}
                      className="cursor-pointer"
                    >
                      {genre.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {state?.errors?.genreIds && (
              <p
                id="genreIds-error"
                className="text-red-600 text-sm"
                aria-live="polite"
              >
                {state.errors.genreIds}
              </p>
            )}
          </div>
          <div className="relative flex flex-col items-start gap-2  ">
            <label htmlFor="featureIds" className="flex items-center gap-2 ">
              目的
            </label>
            <div className="relative w-full">
              <div className="flex flex-col gap-2">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-center gap-2">
                    <input
                      id={`feature-${feature.id}`}
                      name="featureIds"
                      type="checkbox"
                      className="p-4 rounded-lg bg-white w-4 h-4"
                      value={feature.id}
                    />
                    <label
                      htmlFor={`feature-${feature.id}`}
                      className="cursor-pointer"
                    >
                      {feature.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {state?.errors?.featureIds && (
              <p
                id="featureIds-error"
                className="text-red-600 text-sm"
                aria-live="polite"
              >
                {state.errors.featureIds}
              </p>
            )}
          </div>
          <div className="relative flex flex-col items-start gap-2  ">
            <label htmlFor="imageUrl" className="flex items-center gap-2 ">
              施設の画像
            </label>
            <div className="relative w-[320px]">
              <input
                id="imageUrl"
                name="imageUrl"
                type="file"
                onChange={handleImageChange}
                className={`p-4 rounded-lg bg-white w-full ${
                  state?.errors?.imageUrl
                    ? 'border-2 border-red-600'
                    : 'border border-color-main-600'
                }`}
                aria-describedby="imageUrl-error"
              />
            </div>
            {imagePreviewUrl && (
              <ul className="grid grid-cols-3 w-full ">
                <li className="relative aspect-video">
                  <Image
                    src={imagePreviewUrl}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </li>
              </ul>
            )}
            {state?.errors?.imageUrl && (
              <p
                id="imageUrl-error"
                className="text-red-600 text-sm"
                aria-live="polite"
              >
                {state.errors.imageUrl}
              </p>
            )}
          </div>
          {userId && <input type="hidden" name="userId" value={userId} />}
          <div className="flex justify-center mt-5">
            <button
              className={`px-4 py-3 border border-color-main-400  rounded-lg transition w-[320px] h-16 hover:bg-color-main-200 `}
              disabled={pending}
            >
              {pending ? '登録中...' : '上記の内容で登録する'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
