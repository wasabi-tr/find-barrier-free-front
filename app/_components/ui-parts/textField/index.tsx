import React from 'react'
import { PencilSquareIcon } from '@heroicons/react/24/outline'

const TextField = () => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="free" className="flex items-center gap-2">
        <span>
          <PencilSquareIcon className="h-6 w-6 text-color-main-800" />
        </span>
        フリーワード
      </label>
      <input type="text" id="free" className="textField" name="free" />
    </div>
  )
}

export default TextField
