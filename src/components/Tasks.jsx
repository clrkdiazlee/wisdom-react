import React from 'react'

const Tasks = () => {
  return (
    // ====================== MAIN CONTAINER AND BACKGROUND
    <div className="antialiased bg-slate-200 text-slate-700 mx-2 font-poppins">
      {/* ====================== STUDENT DAILY TASKS */}
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div className="flex flex-row justify-between items-center">
          {/* ====================== TASK HEADER */}
          <div>
            <h1 className="text-3xl font-semibold !text-[#2F80ED]">Tasks</h1>
          </div>
          {/* ====================== TASK ACTION BUTTONS */}
          <div className="inline-flex space-x-2 items-center">
            {/* <a href="#" className="p-2 border border-slate-200 rounded-full inline-flex space-x-1 items-center text-indigo-200 hover:text-white bg-[#0017EB] hover:bg-[#0017EB]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium hidden md:block px-1">Urgent</span>                     
            </a>
            <a href="#" className="p-2 border border-slate-600 rounded-full inline-flex space-x-1 items-center hover:bg-slate-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="text-sm hidden md:block">Latest</span>
            </a> */}
          </div>
        </div>

        {/* ====================== TASK CAPTION */}
        <p className="text-slate-500">Hello, here are your latest tasks</p>
        
        {/* ====================== CONTAINER FOR TASKS IN PROGRESS */}
        <div id="tasks-in-progress" className="my-8">
          <p className="text-xl font-semibold !text-black">In Progress</p>
          {/* ====================== INDIVIDUAL TASK # */}
          <div id="task" className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150">
            <div className="inline-flex items-center space-x-2">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-slate-500 hover:text-[#0017EB] hover:cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              {/* ====================== REPLACE TASK NAME HERE ====================== */}
              <div>Create a database model</div>
            </div>
            {/* ====================== TRASH ICON */}
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-red-500 hover:text-slate-700 hover:cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* ====================== CONTAINER FOR COMPLETED TASKS */}
        <div id="tasks-completed" className="my-8">
          <p className="text-xl font-semibold !text-black">Completed</p>
          <div id="task" className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
            <div className="inline-flex items-center space-x-2">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#64748B" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-white hover:cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-slate-500 line-through">Revise document proposal</div>
            </div>
              {/* ====================== TRASH ICON */}
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-red-500 hover:text-slate-700 hover:cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </div>
          </div>
        </div>

        {/* <p className="text-xs text-slate-500 text-center">Last updated 12 minutes ago</p> */}

        {/* ====================== ADD NEW TASK BUTTON */}
        <button
          type="button"
          className="mb-2 block w-full rounded-full bg-[#0017EB] px-6 pt-2.5 pb-2 text-lg font-medium leading-normal text-white transition duration-150 ease-in-out hover:bg-[#000e91] focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700">
          Add New Task
        </button>
      </div>
      {/*  */}

      {/* ====================== DOCUMENTATION UPLOAD */}
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">

      </div>
    </div>

  )
}

export default Tasks
