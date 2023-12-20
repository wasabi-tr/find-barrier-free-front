'use client'
import React, { useEffect, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { registerReviewAction } from '../actions/reviewRegisterAction'
import Image from 'next/image'
import { usePreviewImage } from '@/app/_common/hooks/usePreviewImage'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { Review } from '@/app/_common/types'

const initialState = {
  errors: {},
  message: null,
}

const ReviewForm = () => {
  const { pending } = useFormStatus()
  const [state, register] = useFormState(registerReviewAction, initialState)
  const { imagePreviewUrl, handleImageChange } = usePreviewImage()
  const session = useSession()
  const userId = session?.data?.user.id
  const searchParams = useSearchParams()
  const factoryId = searchParams.get('id') as string
  const [review, setReview] = useState<Review | undefined>(undefined)

  /* 現在ログインしているユーザーがすでに選択した施設の口コミを登録しているか判別するために、userIdとfactoryIdからレビューを取得する*/
  useEffect(() => {
    const getReview = async () => {
      const res = await fetch(
        `api/review/getReviewByUserIdAndFactoryId?userId=${userId}&factoryId=${factoryId}`
      )
      const data = await res.json()
      setReview(data)
    }
    getReview()
  }, [userId, factoryId])

  return (
    <div className="grid gap-6">
      <h2 className="text-center font-bold">口コミを登録する</h2>
      <form action={register}>
        <div className="grid gap-10">
          <div className="relative flex flex-col items-start gap-2  ">
            <label htmlFor="title" className="flex items-center gap-2 ">
              タイトル<span className="text-sm text-red-600  ">必須</span>
            </label>
            <div className="relative w-full">
              <input
                id="title"
                name="title"
                type="text"
                defaultValue={review && review.title}
                className={`p-4 rounded-lg bg-white w-full ${
                  state?.errors?.title
                    ? 'border-2 border-red-600'
                    : 'border border-color-main-600'
                }`}
                aria-describedby="name-error"
              />
            </div>
            {state?.errors?.title && (
              <p
                id="name-error"
                className="text-red-600 text-sm"
                aria-live="polite"
              >
                {state.errors.title}
              </p>
            )}
          </div>
          <div className="relative flex flex-col items-start gap-2  ">
            <label htmlFor="comment" className="flex items-center gap-2 ">
              コメント<span className="text-sm text-red-600  ">必須</span>
            </label>
            <div className="relative w-full">
              <textarea
                id="comment"
                name="comment"
                defaultValue={review && review.comment}
                className={`p-4 rounded-lg bg-white w-full h-80 ${
                  state?.errors?.comment
                    ? 'border-2 border-red-600'
                    : 'border border-color-main-600'
                }`}
                aria-describedby="name-error"
              />
            </div>
            {state?.errors?.comment && (
              <p
                id="name-error"
                className="text-red-600 text-sm"
                aria-live="polite"
              >
                {state.errors.comment}
              </p>
            )}
          </div>
          <div className="relative flex flex-col items-start gap-2  ">
            <label htmlFor="imageUrl" className="flex items-center gap-2 ">
              画像
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
        </div>
        <input type="hidden" name="userId" value={userId} />
        <input type="hidden" name="factoryId" value={factoryId} />
        <div className="flex justify-center mt-10">
          <button
            className={`px-4 py-3 border border-color-main-400  rounded-lg transition w-[320px] h-16 hover:bg-color-main-200 `}
            disabled={pending}
          >
            {pending ? '登録中...' : '上記の内容で登録する'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ReviewForm
