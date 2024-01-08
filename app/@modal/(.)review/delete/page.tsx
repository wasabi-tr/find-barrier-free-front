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
      <div className="py-10 px-14 sm:px-5">
        <ReviewDeleteForm id={searchParams.id} />
      </div>
    </Modal>
  )
}

export default DeleteReviewModal
