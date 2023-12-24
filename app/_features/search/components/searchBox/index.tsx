'use client'
import React, { FC } from 'react'
import { AreaSelector } from '@/app/_components/ui-parts/selector/AreaSelector'
import { PurposeSelector } from '@/app/_components/ui-parts/selector/GenreSelector'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import TextField from '@/app/_components/ui-parts/textField'
import FeaturesCheckBox from '@/app/_components/ui-parts/checkBox/featuresCheckBox'
import { searchAction } from '../../actions/searchAction'
import { useFormState, useFormStatus } from 'react-dom'

const SearchBox: FC = async () => {
  const initialState = {
    resultFactories: [],
  }
  const { pending } = useFormStatus()
  const [state, search] = useFormState(searchAction, initialState)
  return (
    <>
      <form className="flex flex-col gap-9" aria-label="施設を検索する">
        <AreaSelector />
        <PurposeSelector />
        <TextField />
        <FeaturesCheckBox />
        <div className="">
          <button className="flex items-center gap-3 justify-center w-full py-5 px-8 rounded-md bg-color-green-600 text-white transition duration-300 hover:bg-color-green-800 ">
            検索
            <span>
              <MagnifyingGlassIcon className="h-6 w-6 text-white" />
            </span>
          </button>
        </div>
      </form>
    </>
  )
}

export default SearchBox
