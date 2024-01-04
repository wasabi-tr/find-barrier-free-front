import { getAllFactoryByUser } from '@/app/_features/factory/api/getAllFactoryByUser'
import FactoryItem from '@/app/_features/factory/components/factoryItem'
import { options } from '@/app/next-auth'
import { PlusIcon } from '@heroicons/react/24/outline'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'

const DashboardFactory = async () => {
  const session = await getServerSession(options)
  const userId = session?.user.id
  const factories = await getAllFactoryByUser(userId)

  return (
    <>
      {factories && factories.length > 0 ? (
        <ul className="grid gap-4">
          {factories?.map((factory) => (
            <FactoryItem key={factory.id} factory={factory} />
          ))}
        </ul>
      ) : (
        <p className="text-center">投稿した施設はありません。</p>
      )}
      <div className="flex justify-center mt-10">
        <Link
          href={'/dashboard/factory/register'}
          className="flex items-center justify-center gap-2 p-3 w-[320px] h-14 rounded-md transition bg-color-green-700 text-white  hover:bg-color-green-800 "
        >
          <span>
            <PlusIcon className="w-6 h-6 text-white" />
          </span>
          施設を登録する
        </Link>
      </div>
    </>
  )
}

export default DashboardFactory
