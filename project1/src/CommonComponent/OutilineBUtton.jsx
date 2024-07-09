import React from 'react'

const OutilineBUtton = ({title,onClick}) => {
  return (
      <>
          <button
              class='bg-white text-gray-600 border rounded-[4px] border-black w-[15%] h-[30px] font-serif'
onClick={onClick}
          >
              {title}
          </button>
      </>
  )
}

export default OutilineBUtton