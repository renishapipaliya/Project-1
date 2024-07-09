import React from 'react'

const Text = ({title}) => {
  return (
    <h1 
      class='text-gray-800  dark:bg-[#151515] dark:text-gray-200  font-semibold  '>
        {title}
    </h1>
  )
}

export default Text