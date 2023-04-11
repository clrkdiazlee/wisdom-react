import React from 'react'

const IndivCategory = () => {
    return (
        <div className='h-auto justify-center my-20 font-poppins text-sm md:w-[800px] w-auto md:mx-auto mx-3'>
            <div className='mx-auto md:w-[650px] w-auto'>
                {/* TITLE */}
                <h4 className='text-headingBlue text-sm font-medium'>Web Development</h4>       
                <h1 className='text-2xl font-bold mb-4'>Front-end Web Developer</h1>

                {/* DESCRIPTION */}
                <p>
                    A front-end developer intern is responsible for assisting in the creation and maintenance of the user interface (UI) for websites and applications. They work closely with the design team to ensure that the visual elements of a website or application are translate into a functional and engaging user experience. 

                    During their internship, a front-end developer will learn how to write clean, organized code using HTML, CSS, and JavaScript. They will also gain experience in using frameworks such as React, Angular, or Vue to build interactive web applications.
                </p>

                {/* JOIN NOW BUTTON */}
                <a href='#'><button className='bg-headingBlue text-white text-sm font-medium mt-9 mb-20 py-2 px-8 rounded-full'>Join Now</button></a>

                <div className='flex gap-4 w-auto'>
                    {/* KEY ROLES */}
                    <div className='rounded-lg shadow-lg py-9 px-8'>
                        <h2 className='text-xl font-bold mb-4'>Key Roles</h2>
                        <ul>
                            <li>Create and maintain UI for websites and apps.</li>
                            <li>Write clean code using HTML, CSS, and JavaScript.</li>
                            <li>Test and Debig code for prope functionality.</li>
                            <li>Integrate APIs and back-end technologies.</li>
                            <li>Collaborate with team members.</li>
                            <li>Communicate progress effectively.</li>
                        </ul>
                    </div>
                    {/* QUALIFICATIONS */}
                    <div className='rounded-lg shadow-lg p-10'>
                        <h2 className='text-xl font-bold mb-4'>Qualifications</h2>
                        <ul>
                            <li>Create and maintain UI for websites and apps.</li>
                            <li>Write clean code using HTML, CSS, and JavaScript.</li>
                            <li>Test and Debig code for prope functionality.</li>
                            <li>Integrate APIs and back-end technologies.</li>
                            <li>Collaborate with team members.</li>
                            <li>Communicate progress effectively.</li>
                        </ul>
                    </div>
                </div>

                {/* ACCOMPLISHMENTS */}
                <h2 className='text-xl font-bold mt-20 mb-4'>Accomplishments</h2>
                {/* GALLERY */}
                <div className='grid md:grid-cols-3 grid-cols-2 gap-4'>
                    {/* IMAGES */}
                    <div className='bg-slate-200 rounded-lg h-[10rem] w-auto overflow-hidden'>
                        <img src="/images/logo-blue.jpg" alt="Logo" className="w-full h-full" />
                    </div>
                    <div className='bg-slate-200 rounded-lg h-[10rem] w-auto overflow-hidden'>
                        <img src="/images/logo-blue.jpg" alt="Logo" className="w-full h-full" />
                    </div>
                    <div className='bg-slate-200 rounded-lg h-[10rem] w-auto overflow-hidden'>
                        <img src="/images/logo-blue.jpg" alt="Logo" className="w-full h-full" />
                    </div>
                    <div className='bg-slate-200 rounded-lg h-[10rem] w-auto overflow-hidden'>
                        <img src="/images/logo-blue.jpg" alt="Logo" className="w-full h-full" />
                    </div>
                    <div className='bg-slate-200 rounded-lg h-[10rem] w-auto overflow-hidden'>
                        <img src="/images/logo-blue.jpg" alt="Logo" className="w-full h-full" />
                    </div>
                    <div className='bg-slate-200 rounded-lg h-[10rem] w-auto overflow-hidden'>
                        <img src="/images/logo-blue.jpg" alt="Logo" className="w-full h-full" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default IndivCategory