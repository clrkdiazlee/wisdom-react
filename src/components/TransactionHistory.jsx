import React from 'react'

function TransactionHistory() {
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
                        Find the internship of your <span className=' text-buttonBlue'>Dreams</span>
                    </h1>
                </div>
            </div>



            <div className=' px-20'>
                {/* 2ND NAVBAR LINK */}
                <nav class="flex flex-wrap items-center justify-center px-6 py-6">
                    <div class="flex items-center">
                        <a href="#" class="flex items-center mx-4 font-poppins font-medium text-gray-500 hover:text-blue-500 text-sm md:text-base">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </span>
                            Applicant
                        </a>
                        <a href="#" class="flex items-center mx-4 font-poppins font-medium text-gray-500 hover:text-blue-500 text-sm md:text-base">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                            </span>
                            Transaction
                        </a>
                    </div>
                </nav>



                <hr className='h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6'></hr>

                {/* SCHOOL INFO */}
                <div className='text-center mb-6'>
                    <img src="/images/plm.png" alt="schoo_logo"
                        className=' w-28 mx-auto'
                    />
                    <h5 className=' font-bold font-poppins text-lg' id='school_name'>Pamantasan ng Lungsod ng Maynila</h5>
                    <p className=' font-poppins text-sm text-gray-500' id='school_address'>General Luna, corner Muralla St, Intramuros, Manila</p>
                    <p className=' font-poppins text-sm text-gray-500' id='school_email'>plm@gmail.com</p>
                </div>



                {/* APPLICANTS */}
                <div>


                    {/* COLUMN */}
                    <div id="col" className="w-full">
                        <div id="internship-body" class="flex flex-col md:flex-row items-center justify-between py-4 px-6 bg-gray-200 text-black rounded-lg shadow-md my-4">
                            <div class="flex flex-col">
                                <a id="program-name" href="#" class="text-xl font-bold mb-2 md:mb-0 md:mr-4">Carl Justin B. Cinense</a>
                                <p class="text-sm text-gray-500">4th Year BSIT</p>
                            </div>
                            <div class="flex space-x-2 mt-2 md:mt-0">
                                <button id="accept" class="flex items-center justify-center px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">

                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                    </span>
                                    Proceed
                                </button>
                                <button id="reject" class="flex items-center justify-center px-3 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>


                                    Decline
                                </button>
                            </div>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default TransactionHistory