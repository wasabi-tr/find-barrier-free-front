import { getReviewsByUserId } from '@/app/_features/review/api/getReviewsByUserId'
import { ReviewItem } from '@/app/_features/review/component/reviewItem'
import { options } from '@/app/next-auth'
import { getServerSession } from 'next-auth'
import React from 'react'

const DashboardReview = async () => {
  const session = await getServerSession(options)
  const reviews = await getReviewsByUserId(session?.user.id)

  return reviews && reviews.length > 0 ? (
    <ul className="grid gap-4">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
  ) : (
    <p className="text-center ">投稿した口コミはありません。</p>
  )
}

export default DashboardReview
