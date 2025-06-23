import React from 'react'

const SectionHeading = ({h1 , p}) => {
  return (
    <div className='text-center'>
        <h1 className='text-3xl font-semibold'>{h1}</h1>
        <p className='mt-[15px] text-gray-400'>{p}</p>
    </div>
  )
}

export default SectionHeading