import React from 'react'

const Textfiled = ({placeholder, value,onChange ,w}) => {
  return (
    <div>
      
    <input type='text'  placeholder={placeholder} value={value} onChange={onChange}
        className="border w-[27vw] border-[#cccccc]  dark:border-gray-500 dark:bg-[#333333] dark:text-gray-200 rounded-[9px]   h-[40px] px-3"
    
      />
      
    </div>
  )
}

export default Textfiled