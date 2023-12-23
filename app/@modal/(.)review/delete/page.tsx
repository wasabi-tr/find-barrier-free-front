import Modal from '@/app/_components/ui-element/modal'
import ReviewDeleteForm from '@/app/_features/review/component/reviewDeleteForm'
import ReviewForm from '@/app/_features/review/component/reviewForm'
import React from 'react'

const DeleteReviewModal = async ({
  searchParams,
}: {
  searchParams: { id: string }
}) => {
  return (
    <Modal>
      <ReviewDeleteForm id={searchParams.id} />
    </Modal>
  )
}

export default DeleteReviewModal
