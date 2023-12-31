'use client'
import Container from '../_components/layouts/container'
import Link from 'next/link'
import {
  ArrowRightOnRectangleIcon,
  BuildingLibraryIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  StarIcon,
} from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import LogoutButton from '../_components/ui-parts/authButton/logoutButton'

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  return (
    <div className="bg-color-main-50">
      <Container>
        <div className="flex gap-10 py-16 items-start sm:block ">
          <aside className="flex-shrink-0 basis-[320px] bg-white p-10 rounded-2xl mx-auto sm:w-full sm:basis-0 sm:p-4 sm:rounded-lg sm:overflow-x-scroll ">
            <ul className="grid gap-5 sm:flex sm:w-max sm:self-stretch">
              <li>
                <Link
                  href={'/dashboard/factory'}
                  className={`flex items-center gap-2 py-5 px-3 rounded-md transition ${
                    pathname === '/dashboard/factory'
                      ? 'bg-color-green-50 text-color-green-800 font-semibold sm:bg-white sm:border-b-2 sm:border-color-green-600'
                      : 'hover:bg-color-main-200'
                  }  sm:p-0 sm:rounded-none`}
                >
                  <span className="sm:hidden">
                    <BuildingLibraryIcon
                      className={`w-6 h-6  ${
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
                      ? 'bg-color-green-50 text-color-green-800 font-semibold sm:bg-white sm:border-b-2 sm:border-color-green-600'
                      : 'hover:bg-color-main-200'
                  }   sm:p-0 sm:rounded-none`}
                >
                  <span className="sm:hidden">
                    <StarIcon
                      className={`w-6 h-6  ${
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
                      ? 'bg-color-green-50 text-color-green-800 font-semibold sm:bg-white sm:border-b-2 sm:border-color-green-600 '
                      : 'hover:bg-color-main-200 '
                  }  sm:p-0 sm:rounded-none`}
                >
                  <span className="sm:hidden">
                    <ChatBubbleLeftEllipsisIcon
                      className={`w-6 h-6 ${
                        pathname === '/dashboard/review'
                          ? 'text-color-green-800'
                          : 'text-color-main-800'
                      }`}
                    />
                  </span>
                  <p>投稿した口コミ</p>
                </Link>
              </li>
              <li>
                <Link
                  href={'/dashboard/setting'}
                  className={`flex items-center gap-2 py-5 px-3 rounded-md transition ${
                    pathname === '/dashboard/setting'
                      ? 'bg-color-green-50 text-color-green-800 font-semibold sm:bg-white sm:border-b-2 sm:border-color-green-600 '
                      : 'hover:bg-color-main-200'
                  } sm:p-0 sm:rounded-none`}
                >
                  <span className="sm:hidden">
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
              <li>
                <LogoutButton />
              </li>
            </ul>
          </aside>
          <div className="flex-1 bg-white p-10 rounded-2xl sm:rounded-lg sm:mt-6 sm:p-0 sm:bg-color-main-50">
            {children}
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Dashboard
