import React from 'react'

const HRStudentApplicantsv2 = () => {
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
                    <h1 className="text-3xl font-medium text-gray-900 dark:text-white">Student Applicants</h1>
                </div>
            </div>

            {/* FILTERED VIEW FOR APPROVED AND PENDING */}
            <div className="mt-6 md:flex md:items-center md:justify-between">
                {/* View Filters */}
                <div className="inline-flex overflow-hidden bg-white border divide-x rounded-full dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                    <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                        View all
                    </button>

                    <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                        Pending
                    </button>

                    <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                        Incomplete
                    </button>

                    <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                        Approved
                    </button>
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
                                            Status
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-700 dark:text-gray-400">
                                            Submitted
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-700 dark:text-gray-400">
                                            Incomplete
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-700 dark:text-gray-400">
                                            Duration
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-700 dark:text-gray-400">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    {/* ======================================== FIRST ROW ======================================== */}
                                    <tr>
                                        {/* STUDENT NAME & EMAIL */}
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
                                                        <p className="text-xs font-normal text-gray-600 dark:text-gray-400">juandelacruz@gmail.com</p>
                                                    </div>
                                                </span>
                                            </div>
                                        </td>
                                        {/* STATUS */}
                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-orange-600 bg-orange-100 dark:bg-gray-800">
                                                <h2 className="text-sm font-normal">Pending</h2>
                                            </div>
                                        </td>
                                        {/* SUBMITTED REQUIREMENTS */}
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                            <span className="flex items-center gap-x-2">
                                                <div>
                                                    {/* Student Requirement */}
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="flex items-center justify-center px-2.5 py-1.5 gap-x-2 sm:w-auto">
                                                            <svg class="h-5 w-5 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                                                            <span className='text-gray-700 pr-2'>
                                                            Resume
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* Student Requirement */}
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="flex items-center justify-center px-2.5 py-1.5 gap-x-2 sm:w-auto">
                                                            <svg class="h-5 w-5 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                                                            <span className='text-gray-700 pr-2'>
                                                            Recommendation Letter
                                                            </span>
                                                        </div>
                                                    </div>                                                    
                                                    {/* Student Requirement */}
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="flex items-center justify-center px-2.5 py-1.5 gap-x-2 sm:w-auto">
                                                            <svg class="h-5 w-5 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                                                            <span className='text-gray-700 pr-2'>
                                                            30- to 60-second video
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* Student Requirement */}
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="flex items-center justify-center px-2.5 py-1.5 gap-x-2 sm:w-auto">
                                                            <svg class="h-5 w-5 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                                                            <span className='text-gray-700 pr-2'>
                                                            Personal Information Form 
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* Student Requirement */}
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="flex items-center justify-center px-2.5 py-1.5 gap-x-2 sm:w-auto">
                                                            <svg class="h-5 w-5 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                                                            <span className='text-gray-700 pr-2'>
                                                            Consent Form 
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* Student Requirement */}
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="flex items-center justify-center px-2.5 py-1.5 gap-x-2 sm:w-auto">
                                                            <svg class="h-5 w-5 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                                                            <span className='text-gray-700 pr-2'>
                                                            School Registration Form
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* Student Requirement */}
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="flex items-center justify-center px-2.5 py-1.5 gap-x-2 sm:w-auto">
                                                            <svg class="h-5 w-5 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                                                            <span className='text-gray-700 pr-2'>
                                                            Vaccination Certificate
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </td>
                                        {/* MISSING REQUIREMENTS */}
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                            <span className="flex items-center gap-x-2">
                                                <div>
                                                    {/* Student Requirement */}
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="flex items-center justify-center px-2.5 py-1.5 gap-x-2 sm:w-auto">
                                                            {/* <svg class="h-5 w-5 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg> */}
                                                            <span className='text-gray-700 pr-2'>
                                                                None
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </td>
                                        {/* DURATION */}
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">200</td>
                                        {/* ACTION BUTTON */}
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <div className="flex items-center gap-x-3">
                                                {/* Approve Button */}
                                                <button className="flex items-center justify-center px-2.5 py-2.5  text-sm transition-colors duration-200 bg-buttonBlue border rounded-xl gap-x-2 sm:w-auto
                                                dark:hover:bg-buttonBlue dark:bg-buttonBlue hover:bg-blue-900 dark:text-buttonBlue dark:border-buttonBlue">
                                                    <svg class="h-5 w-5 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                                                    <span className='text-white pr-2'>
                                                        Approve
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* ======================================== SECOND ROW ======================================== */}
                                    <tr>
                                        {/* STUDENT NAME & EMAIL */}
                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                            <div className="inline-flex items-center gap-x-3">
                                                <input type="checkbox" className="text-blue-500 border-gray-300 rounded
                                                dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700">
                                                </input>

                                                <span className="flex items-center gap-x-2 ml-5">
                                                    <div>
                                                        {/* Student Name */}
                                                        <h2 className="text-sm font-medium text-gray-800 dark:text-white ">Jesse Pinkman</h2>
                                                        {/* Student Email */}
                                                        <p className="text-xs font-normal text-gray-600 dark:text-gray-400">jessepinkman@gmail.com</p>
                                                    </div>
                                                </span>
                                            </div>
                                        </td>
                                        {/* STATUS */}
                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-gray-900 bg-gray-200 dark:bg-gray-800">
                                                <h2 className="text-sm font-normal">Incomplete</h2>
                                            </div>
                                        </td>
                                        {/* SUBMITTED REQUIREMENTS */}
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                            <span className="flex items-center gap-x-2">
                                                <div>
                                                    {/* Student Requirement */}
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="flex items-center justify-center px-2.5 py-1.5 gap-x-2 sm:w-auto">
                                                            <svg class="h-5 w-5 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                                                            <span className='text-gray-700 pr-2'>
                                                            Resume
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* Student Requirement */}
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="flex items-center justify-center px-2.5 py-1.5 gap-x-2 sm:w-auto">
                                                            <svg class="h-5 w-5 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                                                            <span className='text-gray-700 pr-2'>
                                                            Recommendation Letter
                                                            </span>
                                                        </div>
                                                    </div>                                                    
                                                    {/* Student Requirement */}
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="flex items-center justify-center px-2.5 py-1.5 gap-x-2 sm:w-auto">
                                                            <svg class="h-5 w-5 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                                                            <span className='text-gray-700 pr-2'>
                                                            30- to 60-second video
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* Student Requirement */}
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="flex items-center justify-center px-2.5 py-1.5 gap-x-2 sm:w-auto">
                                                            <svg class="h-5 w-5 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                                                            <span className='text-gray-700 pr-2'>
                                                            Personal Information Form 
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </td>
                                        {/* MISSING REQUIREMENTS */}
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                            <span className="flex items-center gap-x-2">
                                                <div>
                                                    
                                                    {/* Student Requirement */}
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="flex items-center justify-center px-2.5 py-1.5 gap-x-2 sm:w-auto">
                                                            <svg class="h-5 w-5 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                                                            <span className='text-gray-700 pr-2'>
                                                            Consent Form 
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* Student Requirement */}
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="flex items-center justify-center px-2.5 py-1.5 gap-x-2 sm:w-auto">
                                                            <svg class="h-5 w-5 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                                                            <span className='text-gray-700 pr-2'>
                                                            School Registration Form
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* Student Requirement */}
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="flex items-center justify-center px-2.5 py-1.5 gap-x-2 sm:w-auto">
                                                            <svg class="h-5 w-5 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                                                            <span className='text-gray-700 pr-2'>
                                                            Vaccination Certificate
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </td>
                                        {/* DURATION */}
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">200</td>
                                        {/* ACTION BUTTON */}
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <div className="flex items-center gap-x-3">
                                                {/* Approve Button */}
                                                <button className="flex items-center justify-center px-2.5 py-2.5  text-sm transition-colors duration-200 bg-buttonBlue border rounded-xl gap-x-2 sm:w-auto
                                                dark:hover:bg-buttonBlue dark:bg-buttonBlue hover:bg-blue-900 dark:text-buttonBlue dark:border-buttonBlue">
                                                    <svg class="h-5 w-5 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 11 12 14 20 6" />  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                                                    <span className='text-white pr-2'>
                                                        Approve
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

export default HRStudentApplicantsv2