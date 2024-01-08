import Modal from '@/app/_components/ui-element/modal'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchModal = async ({ children }: { children: React.ReactElement }) => {
  return (
    <Modal>
      <form action="factory" method="GET" className="relative">
        <div className="py-5 px-6">{children}</div>
        <div className="sticky bottom-0 left-0 w-full">
          <button className="flex items-center gap-3 justify-center w-full py-5 px-8 rounded-b-md bg-color-green-600 text-white transition duration-300 hover:bg-color-green-800 ">
            検索
            <span>
              <MagnifyingGlassIcon className="h-6 w-6 text-white" />
            </span>
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default SearchModal
