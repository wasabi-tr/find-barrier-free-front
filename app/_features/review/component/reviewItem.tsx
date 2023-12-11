import { Review } from '@/app/_common/types'
import React from 'react'
import { format, parseISO } from 'date-fns'

export const ReviewItem = ({ review }: { review: Review }) => {
  const { id, title, comment, createdAt, factory } = review
  const date = parseISO(createdAt)
  const formatDate = format(date, ' yyyy/MM/dd')
  return (
    <li key={id} className="p-8 border border-color-main-400 rounded-md ">
      <div className="grid gap-2">
        <p className="text-sm text-color-main-700">公開日:{formatDate}</p>
        <p className="text-sm text-color-main-700">施設名:{factory.name}</p>
      </div>
      <div className="mt-4">
        <p className="font-semibold text-lg">{title}</p>
        <p className="text-sm">{comment}</p>
      </div>
      <div className="flex gap-3 justify-end w-full mt-4">
        <button
          type="button"
          className="px-4 py-3 border border-color-main-400 rounded-lg transition hover:bg-color-main-800 hover:text-white "
        >
          編集する
        </button>
        <button
          type="button"
          className="px-4 py-3 border border-red-500 text-red-500 rounded-lg transition hover:bg-red-500 hover:text-white  "
        >
          削除する
        </button>
      </div>
    </li>
  )
}
