import React from 'react'

const IndexHero = () => {
  return (
    <div className='bg-heroPattern'>
      <div className='flex flex-col justify-center items-center h-[42.6875rem]'>
        <div className='font-poppins font-bold text-[5rem] text-center px-[20rem] leading-tight'>
          Find the internship of your <span className='text-headingBlue'>Dreams</span>
        </div>
        <div className='font-poppinsLight font-thin text-center px-[30rem] mt-8'>
          Discover your ideal internship and work with professionals. Explore opportunities that fit your goals today!
        </div>
        <div className='mt-14'>
          <button className="font-poppins font-bold text-xl px-14 py-3 border bg-buttonBlue border-buttonBlue rounded-full text-white tracking-wide">
            Join Now
          </button>
        </div>
      </div>
      <div>
        <div> {/* HEADING */}
          <div className='font-poppins font-medium text-[1.4rem] text-headingBlue text-center leading-tight mt-28'>
            Choose Categories
          </div>
          <div className='font-poppins font-bold text-[2.7rem] text-center leading-tight mt-2'>
            Internship Opportunities
          </div>
        </div>
        <div className='flex flex-wrap mt-16 font-poppins'>
          <div className='flex px-7 py-8 items-center bg-blue-200 rounded-[2rem]'>
            <div>
              <img src="/images/iconMarketing.svg" alt="iconMarketing" className='w-12' />
            </div>
            <div className='pl-8'>
              <div className='pb-2 text-lg font-bold'>
                Marketing & <br />Communication
              </div>
              <div className='pt-2 text-sm'>
                12 Jobs Available
              </div>
            </div>

          </div>
          <div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
          <div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
          <div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
          <div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
          <div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
          <div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
          <div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
          <div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexHero