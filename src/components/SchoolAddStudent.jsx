import React from 'react'

const SchoolAddStudent = () => {
    return(
        <div>
            <div className='bg-[#D3EDFF] h-40 w-full'>
                
            </div>
            <main className='h-screen flex justify-center mx-auto mt-10 font-poppins'>
                <div>
                    <div className='bg-[#D3EDFF] h-'></div>
                    <h1 className='font-bold text-2xl mb-5'>Add Student</h1>
                    <div className='flex-auto md:flex gap-5'>
                        {/* NAME */}
                        <div>
                            {/* FIRST NAME */}
                            <label htmlFor="first-name" 
                            className='font-semibold'>First Name</label>
                                <input 
                                type="test" 
                                name="first-name" 
                                placeholder="First Name" 
                                className='block border rounded-2xl p-1 px-2 mb-3' />
                        </div>
                        <div>
                            {/* MIDDLE NAME */}
                            <label htmlFor="middle-name" 
                            className='font-semibold'>Middle Name</label>
                                <input 
                                type="test" 
                                name="middle-name" 
                                placeholder="Middle Name" 
                                className='block border rounded-2xl p-1 px-2 mb-3' />
                        </div>
                        <div>
                            {/* LAST NAME */}
                            <label htmlFor="last-name" 
                            className='font-semibold'>Last Name</label>
                                <input 
                                type="test" 
                                name="last-name" 
                                placeholder="Last Name" 
                                className='block border rounded-2xl p-1 px-2 mb-3' />
                        </div>
                    </div>
                    <div>
                        {/* ADDRESS */}
                        <label htmlFor="address" 
                        className='font-semibold'>Address</label>
                            <input 
                            type="test" 
                            name="address" 
                            placeholder="Address" 
                            className='block border rounded-2xl p-1 px-2 mb-3 w-full' />
                        {/* CONTACT NUMBER */}
                        <label htmlFor="contact-number" 
                        className='font-semibold'>Contact Number</label>
                            <input 
                            type="tel" 
                            name="contact-number" 
                            pattern='^(09|\+639)\d{9}$' 
                            placeholder="Contact-Number" 
                            className='block border rounded-2xl p-1 px-2 mb-3 w-full' />
                        {/* CITY */}
                        <label htmlFor="city" 
                        className='font-semibold'>City</label>
                            <select className='block border rounded-2xl p-1 px-2 mb-3 w-full md:w-2/4'>
                                <option>Manila</option>
                                <option>Manila</option>
                                <option>Manila</option>
                            </select>
                        {/* PASSWORD */}
                        <label htmlFor='password' 
                        className='font-semibold'>Password</label>
                            <input 
                            type='password'
                            name='password'
                            placeholder='Password'
                            className='block border rounded-2xl p-1 px-2 mb-3 w-full' />
                    </div>
                    <div className='flex gap-4 mt-[6rem]'>
                        {/* DISCARD BUTTON */}
                        <button
                        type='submit'
                        className='border border-headingBlue bg-white text-headingBlue font-medium py-2 px-10 rounded-full'>
                            Discard
                        </button>
                        {/* ADD BUTTON */}
                        <button
                        type='submit'
                        className='bg-headingBlue text-white font-medium py-2 px-10 rounded-full'>
                            Add
                        </button>
                    </div>
                </div>
            </main>
        </div> 
    )
}

export default SchoolAddStudent