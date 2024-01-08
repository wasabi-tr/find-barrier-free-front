import Modal from '@/app/_components/ui-element/modal'
import ReviewForm from '@/app/_features/review/component/reviewForm'
import React from 'react'

const ReviewModal = async ({
  searchParams,
}: {
  searchParams: { id: string }
}) => {
  return (
    <Modal>
      <div className="py-10 px-14 sm:px-5">
        <ReviewForm />
      </div>
    </Modal>
  )
}

export default ReviewModal
