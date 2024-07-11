import React from 'react'

const Textfiled = ({ placeholder, width,
  bgcolor, value, onChange, border, }) => {
  return (
    <div>
      
    <input type='text'  placeholder={placeholder} value={value} onChange={onChange}
     
        className={`p-2 ${bgcolor} ${width} outline-none border-2 ${border} rounded-lg dark:bg-[#333333] dark:border-none dark:text-primary`}
    
      />
      
    </div>
  )
}

export default Textfiled