import React, { Children } from 'react'

const Text = ({children,className}) => {
  return (
    <h1 
      className={className}>
        {children}
    </h1>
  )
}

export default Text