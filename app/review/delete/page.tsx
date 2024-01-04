import Container from '@/app/_components/layouts/container'
import ReviewDeleteForm from '@/app/_features/review/component/reviewDeleteForm'
import React from 'react'

const DeleteReview = async ({
  searchParams,
}: {
  searchParams: { id: string }
}) => {
  return (
    <Container narrow>
      <div className="py-10">
        <ReviewDeleteForm id={searchParams.id} />
      </div>
    </Container>
  )
}

export default DeleteReview
