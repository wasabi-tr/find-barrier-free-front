import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Container from '../_components/layouts/container'

const SearchLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-color-main-50 py-16">
      <Container narrow>
        <div className="p-8 bg-white rounded-2xl sm:p-5 ">
          <form
            action="factory"
            method="GET"
            aria-label="施設の特徴から検索する"
          >
            {children}
            <div className="max-w-xs mt-12 mx-auto">
              <button className="flex items-center gap-3 justify-center w-full py-5 px-8 rounded-md bg-color-green-600 text-white transition duration-300 hover:bg-color-green-800 ">
                検索
                <span>
                  <MagnifyingGlassIcon className="h-6 w-6 text-white" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}
export default SearchLayout
