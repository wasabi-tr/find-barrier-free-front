import React, { Suspense } from 'react'
import Container from '../_components/layouts/container'
import Link from 'next/link'
import {
  BuildingLibraryIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  StarIcon,
} from '@heroicons/react/24/outline'
const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start justify-center   sm:flex-col">
      <aside className="flex-shrink-0 basis-[320px]  p-5 mx-auto border-r border-color-main-400 sm:w-full sm:basis-0">
        <ul>
          <li>
            <Link
              href={'/dashboard/factory'}
              className="flex items-center gap-2 p-3 rounded-md transition  hover:bg-color-main-200 "
            >
              <span>
                <BuildingLibraryIcon className="w-6 h-6 text-color-main-800" />
              </span>
              <p>投稿した施設</p>
            </Link>
          </li>
          <li>
            <Link
              href={'/dashboard/favorite'}
              className="flex items-center gap-2 p-3 rounded-md transition  hover:bg-color-main-200 "
            >
              <span>
                <StarIcon className="w-6 h-6 text-color-main-800" />
              </span>
              <p>お気に入りの施設</p>
            </Link>
          </li>
          <li>
            <Link
              href={'/dashboard/review'}
              className="flex items-center gap-2 p-3 rounded-md transition  hover:bg-color-main-200 "
            >
              <span>
                <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-color-main-800" />
              </span>
              <p>投稿したレビュー</p>
            </Link>
          </li>
          <li>
            <Link
              href={'/dashboard/setting'}
              className="flex items-center gap-2 p-3 rounded-md transition  hover:bg-color-main-200 "
            >
              <span>
                <Cog6ToothIcon className="w-6 h-6 text-color-main-800" />
              </span>
              <p>設定</p>
            </Link>
          </li>
        </ul>
      </aside>
      <div className="flex-1">
        <Container>{children}</Container>
      </div>
    </div>
  )
}
export default Dashboard
