'use client'
import { useFormState, useFormStatus } from 'react-dom'
import { actions } from '../actions/factoryRegisterActions'
import { Button } from '@/app/_components/ui-parts/button'

const initialState = {
  errors: {},
  message: null,
}
export const RegisterForm = () => {
  const [state, register] = useFormState(actions, initialState)
  const { pending } = useFormStatus()
  console.log(state)
  //エラー時の処理がうまく行っていない

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
              <input
                id="prefecture"
                name="prefecture"
                type="text"
                className={`p-4 rounded-lg bg-white w-full ${
                  state?.errors?.prefecture
                    ? 'border-2 border-red-600'
                    : 'border border-color-main-600'
                }`}
                aria-describedby="prefecture-error"
              />
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
                // type="text"
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
              <div className="">
                {[
                  '月曜日',
                  '火曜日',
                  '水曜日',
                  '木曜日',
                  '金曜日',
                  '土曜日',
                  '日曜日',
                ].map((day) => (
                  <div key={day} className="flex items-center gap-2">
                    <input
                      id={`holiday-${day}`}
                      name="holidays"
                      type="checkbox"
                      className="p-4 rounded-lg bg-white"
                    />
                    <label htmlFor={`holiday-${day}`}>{day}</label>
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

          <div className="flex justify-center mt-5">
            <Button green>施設を登録する</Button>
          </div>
        </div>
      </form>
    </div>
  )
}
