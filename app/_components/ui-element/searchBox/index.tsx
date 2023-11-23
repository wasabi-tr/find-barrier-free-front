import React, { FC } from 'react'
import { AreaSelector } from '@/app/_components/ui-parts/selector/AreaSelector'
import { PurposeSelector } from '@/app/_components/ui-parts/selector/GenreSelector'
import TextField from '../../ui-parts/textField'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import AccessibilityCheckBoxes from '../../ui-parts/checBox/accessibilityCheckBoxes'

const SearchBox: FC = async () => {
  async function myAction(formData: FormData) {
    'use server'
    console.log(formData)

    // ...
  }
  return (
    <form action={myAction} className="flex flex-col gap-9">
      <AreaSelector />
      <PurposeSelector />
      <TextField />
      <AccessibilityCheckBoxes />
      <div className="">
        <button className="flex items-center gap-3 justify-center w-full py-5 px-8 rounded-md bg-color-blue-600 text-white transition duration-300 hover:bg-color-blue-800 ">
          検索
          <span>
            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
          </span>
        </button>
      </div>
    </form>
  )
}

export default SearchBox