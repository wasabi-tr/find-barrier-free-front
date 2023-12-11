import React from 'react'

const Spinner = ({ color = 'border-color-main-500' }) => {
  return (
    <div
      className={`w-8 h-8 mx-auto animate-spin rounded-full border-2 ${color} border-t-transparent `}
    ></div>
  )
}

export default Spinner
