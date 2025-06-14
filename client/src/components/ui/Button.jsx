import React from 'react'

const Button = ({name, bgColor, onClick}) => {
  return (
    <div style={{background: `${bgColor}`}} className='py-2 px-3 rounded-lg w-full font-semibold text-white cursor-pointer text-center' onClick={onClick}>
        {name.toString()}
    </div>
  )
}

export default Button