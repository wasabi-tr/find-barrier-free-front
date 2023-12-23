import { options } from '@/app/next-auth'
import { getServerSession } from 'next-auth'
import React from 'react'
import { deleteReviewAction } from '../actions/deleteReviewAction'

const ReviewDeleteForm = async ({ id }: { id: string }) => {
  const session = await getServerSession(options)
  const userId = session?.user.id

  return (
    <>
      <h2 className="text-center font-bold">削除してもよろしいですか？</h2>
      <form action={deleteReviewAction}>
        <div className="flex justify-center mt-10">
          <button
            className={`px-4 py-3 border border-color-main-400  rounded-lg transition w-[320px] h-16 hover:bg-color-main-200 `}
          >
            削除する
          </button>
        </div>
        <input type="hidden" name="userId" value={userId} />
        <input type="hidden" name="id" value={id} />
      </form>
    </>
  )
}

export default ReviewDeleteForm
