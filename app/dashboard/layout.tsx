'use client'
import Container from '../_components/layouts/container'
import Link from 'next/link'
import {
  BuildingLibraryIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  StarIcon,
} from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <div className="flex gap-10 sm:flex-col">
      <aside className="flex-shrink-0 basis-[320px]  p-5 mx-auto border-r border-color-main-400 sm:w-full sm:basis-0">
        <ul className="grid gap-5 py-3">
          <li>
            <Link
              href={'/dashboard/factory'}
              className={`flex items-center gap-2 py-5 px-3 rounded-md transition ${
                pathname === '/dashboard/factory'
                  ? 'bg-color-green-50 text-color-green-800 font-semibold'
                  : 'hover:bg-color-main-200'
              } `}
            >
              <span>
                <BuildingLibraryIcon
                  className={`w-6 h-6 text-color-main-800 ${
                    pathname === '/dashboard/factory'
                      ? 'text-color-green-800'
                      : 'text-color-main-800'
                  }`}
                />
              </span>
              <p>投稿した施設</p>
            </Link>
          </li>
          <li>
            <Link
              href={'/dashboard/favorite'}
              className={`flex items-center gap-2 py-5 px-3 rounded-md transition ${
                pathname === '/dashboard/favorite'
                  ? 'bg-color-green-50 text-color-green-800 font-semibold'
                  : 'hover:bg-color-main-200'
              }  `}
            >
              <span>
                <StarIcon
                  className={`w-6 h-6 text-color-main-800  ${
                    pathname === '/dashboard/favorite'
                      ? 'text-color-green-800'
                      : 'text-color-main-800'
                  }`}
                />
              </span>
              <p>お気に入りの施設</p>
            </Link>
          </li>
          <li>
            <Link
              href={'/dashboard/review'}
              className={`flex items-center gap-2 py-5 px-3 rounded-md transition ${
                pathname === '/dashboard/review'
                  ? 'bg-color-green-50 text-color-green-800 font-semibold '
                  : 'hover:bg-color-main-200 '
              } `}
            >
              <span>
                <ChatBubbleLeftEllipsisIcon
                  className={`w-6 h-6 text-color-main-800 ${
                    pathname === '/dashboard/review'
                      ? 'text-color-green-800'
                      : 'text-color-main-800'
                  }`}
                />
              </span>
              <p>投稿したレビュー</p>
            </Link>
          </li>
          <li>
            <Link
              href={'/dashboard/setting'}
              className={`flex items-center gap-2 py-5 px-3 rounded-md transition ${
                pathname === '/dashboard/setting'
                  ? 'bg-color-green-50 text-color-green-800 font-semibold '
                  : 'hover:bg-color-main-200'
              }`}
            >
              <span>
                <Cog6ToothIcon
                  className={`w-6 h-6  ${
                    pathname === '/dashboard/setting'
                      ? 'text-color-green-800'
                      : 'text-color-main-800'
                  }`}
                />
              </span>
              <p>設定</p>
            </Link>
          </li>
        </ul>
      </aside>
      <div className="flex-1 py-10">
        <Container>{children}</Container>
      </div>
    </div>
  )
}
export default Dashboard
