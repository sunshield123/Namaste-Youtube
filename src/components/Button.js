import React from 'react'

function Button({name}) {
  return (
    <div>
        <button className='px-5 m-2 bg-gray-200 py-2 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button