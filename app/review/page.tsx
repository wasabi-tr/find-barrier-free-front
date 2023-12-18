import { getServerSession } from 'next-auth'
import React from 'react'
import { options } from '../next-auth'

const Review = async ({ searchParams }: { searchParams: { id: string } }) => {
  const session = await getServerSession(options)
  const userId = session?.user.id
  const factoryId = searchParams.id
  return <div>Review</div>
}

export default Review
