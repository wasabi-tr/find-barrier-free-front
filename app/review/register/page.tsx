import Container from '@/app/_components/layouts/container'
import ReviewForm from '@/app/_features/review/component/reviewForm'
import { getServerSession } from 'next-auth'
import React from 'react'

const Review = async () => {
  return (
    <Container narrow>
      <div className="py-10">
        <ReviewForm />
      </div>
    </Container>
  )
}

export default Review
