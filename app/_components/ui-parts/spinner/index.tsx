import React from 'react'

const Spinner = ({ width = 'w-8', height = 'h-8' }) => {
  return (
    <div
      className={`${width} ${height} mx-auto animate-spin rounded-full border-4  border-color-main-500 border-t-color-main-800 `}
    ></div>
  )
}

export default Spinner
