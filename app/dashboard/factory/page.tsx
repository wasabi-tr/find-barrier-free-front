import FactoryList from '@/app/_features/factory/components/factoryList'
import { PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const DashboardFactory = async () => {
  return (
    <>
      <FactoryList />
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
