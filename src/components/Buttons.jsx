import React from 'react'

function Buttons({name}) {
  return (
    <div>
        <button className=' py-2 px-4 m-2 rounded-md bg-gray-300'>{name}</button>
    </div>
  )
}

export default Buttons