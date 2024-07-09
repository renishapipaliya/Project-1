import React from 'react'

const Button = ({ title,onClick }) => {
  return (
    <>
          <button
        class='bg-gray-700 text-gray-200 w-[15%] h-[40px] tracking-wider   rounded-[5px] dark:bg-[#2196f3] dark:text-black
        hover:bg-slate-200 hover:border border-gray-400 hover:text-black dark:hover:bg-[#d1d5db]'
        onClick={onClick}
          >
              {title}
          </button>
    </>
  )
}

export default Button