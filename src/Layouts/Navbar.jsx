import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between px-24 w-full shadow-md shadow-slate-200'>
      <div className='flex items-center'>
        <div className='pr-16 py-8'>
          <img src="/images/logo_black.svg" alt="Logo" className='w-32'/>
        </div>
        <div className='flex text-sm font-poppins'>
          <ul className='flex space-x-11'>
            <li><a href="#">About</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className='flex items-center'>
            <div className="border border-buttonGray rounded-full h-10 w-96">
              <form className="flex items-center justify-center first-letter:max-w-sm px-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-6 my-auto text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="text-sm w-full py-2 pl-4 pr-4 text-black outline-none"
                />
                </form>
            </div>
            <div className='flex'>
              <div className='px-5'>
                <button className="bg-buttonBlue border border-buttonBlue font-bold py-2 px-4 rounded-full text-white font-poppins text-sm tracking-wider">
                  Join Now
                </button>
              </div>
              <div>
                <button className="font-bold py-2 px-4 border border-buttonBlue rounded-full text-buttonBlue font-poppins text-sm tracking-wide">
                    Sign In
                  </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar