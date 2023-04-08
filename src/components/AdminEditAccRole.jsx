import React from 'react'

const AdminEditAccRole = () => {
  return (
    <div>
        {/* HEADER */}
        <div className='relative'>
            <div className='w-auto h-60'
                style={{
                    backgroundImage: `url(/images/banner.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>
            {/* <div className='absolute inset-0 flex justify-center items-center'>
                <h1 className='text-4xl font-bold'>
                    Edit Account
                </h1>
            </div> */}
        </div>

        {/* EDIT PROFILE */}
        <div className="flex items-center justify-center p-12 font-poppins mb-20">
            <div className="mx-auto w-full max-w-[550px]">
                <h1 className='text-3xl font-bold mb-10'>
                    Edit Account Role
                </h1>
                {/* FORM START */}
                <form action="" method="POST">
                    {/* FIRST NAME AND LAST NAME */}
                    <div className="-mx-3 flex flex-wrap">
                        {/* First Name Input */}
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-3">
                                <label for="fName" className="mb-3 block text-base font-semibold text-black">
                                    First Name
                                </label>
                                <input type="text" name="fName" id="fName" placeholder="First Name"
                                className="w-full rounded-full border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                            </div>
                        </div>
                        {/* Last Name Input */}
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label for="lName" className="mb-3 block text-base font-semibold text-black">
                                    Last Name
                                </label>
                                <input type="text" name="lName" id="lName" placeholder="Last Name"
                                className="w-full rounded-full border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                            </div>
                        </div>
                    </div>
                    {/* EMAIL ADDRESS */}
                    <div className="mb-3">
                        <label for="emailAddress" className="mb-3 block text-base font-semibold text-black">
                            Email Address
                        </label>
                        <input type="text" name="emailAddress" id="emailAddress" placeholder="Email Address"
                        className="w-full rounded-full border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                    </div>
                    {/* PASSWORD */}
                    <div className="mb-3">
                        <label for="userPassword" className="mb-3 block text-base font-semibold text-black">
                            Password
                        </label>
                        <input type="password" name="userPassword" id="userPassword" placeholder="Password"
                        className="w-full rounded-full border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                    </div>
                    <div className="mb-3">
                        <label for="accRoles" className="mb-3 block text-base font-semibold text-black">
                            Account Role
                        </label>
                        <select id="accRoles" className="w-full rounded-full border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                            <option selected>Choose a role</option>
                            <option value="AD">Admin</option>
                            <option value="FA">Facilitator</option>
                            <option value="HR">HR</option>
                            <option value="SC">School</option>
                            <option value="ST">Student</option>
                        </select>
                    </div>
                    {/* SAVE & CANCEL BUTTONS */}
                    <div className="flex items-center gap-x-3 mt-10">
                        <button className="flex items-center py-3 px-8 hover:shadow-form rounded-full 
                            border-2 border-buttonBlue text-center text-base font-medium text-buttonBlue sm:w-auto">
                            Cancel
                        </button>
                        <button className="flex items-center py-3 px-10 hover:shadow-form rounded-full
                            bg-buttonBlue text-center text-base font-medium text-white outline-none sm:w-auto
                            dark:hover:bg-buttonBlue dark:bg-buttonBlue hover:bg-blue-900 dark:text-buttonBlue dark:border-buttonBlue">
                            Save
                        </button>
                    </div>
                {/* FORM END */}
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminEditAccRole