import React from 'react'


const SchoolApplication = () => {
    return (

        //BANNER
        <div className=''>
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



            <div className=' mx-14'>
                {/* 2ND NAVBAR LINK */}
                <nav className='flex justify-between items-center h-16 text-black'>
                    <div className="px-4">
                        <ul className="flex">
                            <li className="mx-4">
                                <a href="#" className="flex items-center group hover:text-blue-500 focus:text-blue-500 active:text-blue-500 
            text-gray-300 dark:text-gray-300
            ">
                                    <span className="group-hover:text-blue-500 group-focus:text-blue-500 group-active:text-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>


                                    </span>
                                    <span className='font-[500] font-poppins'>Applicant</span>
                                </a>
                            </li>
                            <li className="mx-4">
                                <a href="#" className="flex items-center group hover:text-blue-500 focus:text-blue-500 active:text-blue-500 
            text-gray-300 dark:text-gray-300
            ">
                                    <span className="group-hover:text-blue-500 group-focus:text-blue-500 group-active:text-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                                        </svg>

                                    </span>
                                    <span className='font-[500] font-poppins'>Transaction</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>









                <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>


                {/* CARDS */}
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-4 py-4">

                    {/* CARDS ### */}
                    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-poppins">
                        <a href="#">
                            <img class="rounded-t-lg" src="/images/plm.png" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Pamantasan ng Lungsod ng Maynila</h5>
                            </a>
                            <p class="mb-3 text-sm text-gray-500">General Luna, corner Muralla St, Intramuros, Manila</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                <span className='pr-1'>10 </span>

                                Pending
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>


                    {/* CARDS ### */}
                    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-poppins">
                        <a href="#">
                            <img class="rounded-t-lg" src="/images/plm.png" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Pamantasan ng Lungsod ng Maynila</h5>
                            </a>
                            <p class="mb-3 text-sm text-gray-500">General Luna, corner Muralla St, Intramuros, Manila</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                <span className='pr-1'>10 </span>

                                Pending
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* CARDS ### */}
                    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-poppins">
                        <a href="#">
                            <img class="rounded-t-lg" src="/images/plm.png" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Pamantasan ng Lungsod ng Maynila</h5>
                            </a>
                            <p class="mb-3 text-sm text-gray-500">General Luna, corner Muralla St, Intramuros, Manila</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                <span className='pr-1'>10 </span>

                                Pending
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* CARDS ### */}
                    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-poppins">
                        <a href="#">
                            <img class="rounded-t-lg" src="/images/plm.png" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Pamantasan ng Lungsod ng Maynila</h5>
                            </a>
                            <p class="mb-3 text-sm text-gray-500">General Luna, corner Muralla St, Intramuros, Manila</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                <span className='pr-1'>10 </span>

                                Pending
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* CARDS ### */}
                    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-poppins">
                        <a href="#">
                            <img class="rounded-t-lg" src="/images/plm.png" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Pamantasan ng Lungsod ng Maynila</h5>
                            </a>
                            <p class="mb-3 text-sm text-gray-500">General Luna, corner Muralla St, Intramuros, Manila</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                <span className='pr-1'>10 </span>

                                Pending
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                </div>



            </div>












        </div>
    )
}

export default SchoolApplication
