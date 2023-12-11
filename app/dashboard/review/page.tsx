import { getReviewsByUserId } from '@/app/_features/review/api'
import { ReviewItem } from '@/app/_features/review/component/reviewItem'
import { options } from '@/app/next-auth'
import { getServerSession } from 'next-auth'
import React from 'react'

const DashboardReview = async () => {
  const session = await getServerSession(options)
  const reviews = await getReviewsByUserId(session?.user.id)

  return (
    <ul className="grid gap-4">
      {reviews &&
        reviews.map((review) => <ReviewItem key={review.id} review={review} />)}
    </ul>
  )
}

export default DashboardReview
