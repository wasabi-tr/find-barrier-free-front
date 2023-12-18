import Modal from '@/app/_components/ui-element/modal'
import { options } from '@/app/next-auth'
import { getServerSession } from 'next-auth'
import { useRouter } from 'next/navigation'
import React from 'react'

const ReviewModal = async ({
  searchParams,
}: {
  searchParams: { id: string }
}) => {
  const session = await getServerSession(options)
  const userId = session?.user.id
  const factoryId = searchParams.id
  return (
    <Modal>
      <p>testestetstestest</p>
    </Modal>
  )
}

export default ReviewModal
