import React from 'react'

function HrBanner() {
  return (
    <div>
        <div className='relative'>
  <div className='w-auto h-60'
    style={{
      backgroundImage: `url(/images/banner.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  ></div>
  <div className='absolute inset-0 flex justify-center items-center'>
    <h1 className='text-4xl font-bold'>
      Find the internship of your <span className='text-blue-500'>Dreams</span>
    </h1>
  </div>
</div>
    </div>
  )
}

export default HrBanner