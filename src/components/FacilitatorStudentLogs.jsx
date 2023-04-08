import React from 'react'

const FacilitatorStudentLogs = () => {
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
        </div>
        
        <div className="container px-5 mx-auto font-poppins mt-6 mb-20">
            {/* STUDENT TITLE */}
            <div className="sm:flex sm:items-center sm:justify-between mt-6">
                <div className="flex items-center gap-x-3">
                    {/* Student Title */}
                    <h1 className="text-3xl font-medium text-gray-900 dark:text-white">Student Logs</h1>
                </div>
            </div>

            {/* SEARCH BAR, FILTERED VIEW FOR ONGOING AND COMPLETED */}
            <div className="mt-6 md:flex md:items-center md:justify-between">
                {/* View Filters */}
                <div className="inline-flex overflow-hidden bg-white border divide-x rounded-full dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                    <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                        View all
                    </button>

                    <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                        Ongoing
                    </button>

                    <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                        Completed
                    </button>

                </div>

                {/* Search Bar */}
                <div className="relative flex items-center mt-4 md:mt-0">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>

                    <input 
                        type="text" placeholder="Search" 
                        class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-full md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5
                        dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                    </input>
                </div>
            </div>
            
            {/* TABLE */}
            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-3xl">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-gray-700 dark:text-gray-400">
                                            <div class="flex items-center gap-x-3">
                                                {/* Checkbox Input */}
                                                <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700">
                                                </input>
                                                <button class="flex items-center gap-x-2 ml-5">
                                                    <span>Student Name</span>

                                                    <svg class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                        <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                        <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-700 dark:text-gray-400">
                                            Batch
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-700 dark:text-gray-400">
                                            Status
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-700 dark:text-gray-400">
                                            Course/Strand
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-700 dark:text-gray-400">
                                            Duration
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-700 dark:text-gray-400">
                                            Hours
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-700 dark:text-gray-400">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    {/* ======================================== FIRST ROW ======================================== */}
                                    <tr>
                                        {/* STUDENT NAME AND EMAIL */}
                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                            <div className="inline-flex items-center gap-x-3">
                                                <input type="checkbox" className="text-blue-500 border-gray-300 rounded
                                                dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700">
                                                </input>

                                                <span className="flex items-center gap-x-2 ml-5">
                                                    <div>
                                                        {/* Student Name */}
                                                        <h2 className="text-sm font-medium text-gray-800 dark:text-white ">Juan Dela Cruz</h2>
                                                        {/* Student Email */}
                                                        <p className="text-xs font-normal text-gray-600 dark:text-gray-400">juandelacruz@example.com</p>
                                                    </div>
                                                </span>
                                            </div>
                                        </td>
                                        {/* BATCH */}
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Batch 1</td>
                                        {/* STATUS */}
                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                                <h2 className="text-sm font-normal">Completed</h2>
                                            </div>
                                        </td>
                                        {/* COURSE/STRAND */}
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">STEM</td>
                                        {/* DURATION */}
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">200</td>
                                        {/* HOURS RENDERED */}
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">200</td>
                                        {/* ACTION BUTTON */}
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <div className="flex items-center gap-x-3">
                                                {/* View Student Button */}
                                                <button className="flex items-center justify-center px-2.5 py-2.5  text-sm transition-colors duration-200 bg-buttonBlue border rounded-xl gap-x-2 sm:w-auto
                                                dark:hover:bg-buttonBlue dark:bg-buttonBlue hover:bg-blue-900 dark:text-buttonBlue dark:border-buttonBlue">
                                                    <svg class="h-5 w-5 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                                    </svg>
                                                    <span className='text-white pr-2'>
                                                        View
                                                    </span>
                                                </button>
                                                {/* Done Button */}
                                                <div className="flex items-center justify-center w-1/2 px-2.5 py-2.5 text-sm tracking-wide transition-colors duration-200 bg-gray-400 rounded-xl
                                                shrink-0 sm:w-auto gap-x-2">
                                                    <svg class="h-5 w-5 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                    </svg>
                                                    <span className='text-white pr-2'>
                                                        Done
                                                    </span>                                            
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* ======================================== SECOND ROW ======================================== */}
                                    <tr>
                                        {/* STUDENT NAME AND EMAIL */}
                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                            <div className="inline-flex items-center gap-x-3">
                                                <input type="checkbox" className="text-blue-500 border-gray-300 rounded
                                                dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700">
                                                </input>

                                                <span className="flex items-center gap-x-2 ml-5">
                                                    <div>
                                                        {/* Student Name */}
                                                        <h2 className="text-sm font-medium text-gray-800 dark:text-white ">Ignacio Varga</h2>
                                                        {/* Student Email */}
                                                        <p className="text-xs font-normal text-gray-600 dark:text-gray-400">ignaciovarga@example.com</p>
                                                    </div>
                                                </span>
                                            </div>
                                        </td>
                                        {/* BATCH */}
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Batch 1</td>
                                        {/* STATUS */}
                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-yellow-600 bg-yellow-100 dark:bg-gray-800">
                                                <h2 className="text-sm font-normal">Ongoing</h2>
                                            </div>
                                        </td>
                                        {/* COURSE/STRAND */}
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">STEM</td>
                                        {/* DURATION */}
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">200</td>
                                        {/* HOURS RENDERED */}
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">90</td>
                                        {/* ACTION BUTTON */}
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <div className="flex items-center gap-x-3">
                                                {/* View Student Button */}
                                                <button className="flex items-center justify-center px-2.5 py-2.5  text-sm transition-colors duration-200 bg-buttonBlue border rounded-xl gap-x-2 sm:w-auto
                                                dark:hover:bg-buttonBlue dark:bg-buttonBlue hover:bg-blue-900 dark:text-buttonBlue dark:border-buttonBlue">
                                                    <svg class="h-5 w-5 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                                    </svg>
                                                    <span className='text-white pr-2'>
                                                        View
                                                    </span>
                                                </button>
                                                {/* Done Button */}
                                                <button className="flex items-center justify-center w-1/2 px-2.5 py-2.5 text-sm tracking-wide transition-colors duration-200 bg-green-600 rounded-xl
                                                shrink-0 sm:w-auto gap-x-2 hover:bg-green-700 dark:hover:bg-green-700 dark:bg-green-700">
                                                    <svg class="h-5 w-5 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                    </svg>
                                                    <span className='text-white pr-2'>
                                                        Done
                                                    </span>                                            
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGINATION AT BOTTOM */}
            <div className="flex justify-center mt-6">
                <nav aria-label="Page navigation example">
                    <ul className="flex list-style-none">
                        {/* Previous */}
                        <li className="page-item disabled"><a
                            className="page-link relative block py-1.5 px-3 rounded-lg border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
                            href="#" tabindex="-1" aria-disabled="true">Prev</a></li>
                        <li class="page-item"><a
                            class="page-link relative block py-1.5 px-3 rounded-lg border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#">1</a></li>
                        <li className="page-item active"><a
                            className="page-link relative block py-1.5 px-3 rounded-lg border-0 bg-buttonBlue outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                            href="#">2 <span class="visually-hidden"></span></a></li>
                        <li className="page-item"><a
                            className="page-link relative block py-1.5 px-3 rounded-lg border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#">3</a></li>
                        {/* Next */}
                        <li className="page-item"><a
                            className="page-link relative block py-1.5 px-3 rounded-lg border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default FacilitatorStudentLogs