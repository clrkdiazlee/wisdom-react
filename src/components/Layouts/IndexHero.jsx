import React from 'react'

const IndexHero = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[42.6875rem] bg-heroPattern'>
      <div className='font-poppins font-bold text-[5rem] text-center px-[20rem] leading-tight'>
        Find the internship of your <span className='text-headingBlue'>Dreams</span>
      </div>
      <div className='font-poppinsLight font-thin text-center px-[30rem] mt-8'>
        Discover your ideal internship and work with professionals. Explore opportunities that fit your goals today!
      </div>
      <div className='mt-14'>
        <button className="font-poppins font-bold t ext-xl px-14 py-3 border bg-buttonBlue border-buttonBlue rounded-full text-white tracking-wide">
          Join Now
        </button>
      </div>
    </div>
  )
}

export default IndexHero