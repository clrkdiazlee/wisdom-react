import React from 'react'

function SchoolTransaction() {
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

            <div className=' mx-14'>
                {/* 2ND NAVBAR LINK */}
                <nav className="flex items-center justify-between bg-gray-100 pl-6 pr-6">
                    <div className="flex items-center">
                        <a href="#" className="font-bold text-blue-500 text-lg font-poppins">Logo</a>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="mx-4 font-poppins font-bold text-gray-500 hover:text-blue-500">Application</a>
                        <a href="#" className="mx-4 font-poppins font-bold text-gray-500 hover:text-blue-500">Transaction History</a>
                    </div>
                </nav>
                <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>

                {/* CARDS */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 py-4">

                    {/* CARDS ### */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-poppins">
                        <a href="#">
                            <img className="rounded-t-lg" src="/images/plm.png" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Pamantasan ng Lungsod ng Maynila</h5>
                            </a>
                            <p className="mb-3 text-sm text-gray-500">General Luna, corner Muralla St, Intramuros, Manila</p>
                        </div>
                    </div>

                    {/* CARDS ### */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-poppins">
                        <a href="#">
                            <img className="rounded-t-lg" src="/images/plm.png" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Pamantasan ng Lungsod ng Maynila</h5>
                            </a>
                            <p className="mb-3 text-sm text-gray-500">General Luna, corner Muralla St, Intramuros, Manila</p>

                        </div>
                    </div>

                    {/* CARDS ### */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-poppins">
                        <a href="#">
                            <img className="rounded-t-lg" src="/images/plm.png" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Pamantasan ng Lungsod ng Maynila</h5>
                            </a>
                            <p className="mb-3 text-sm text-gray-500">General Luna, corner Muralla St, Intramuros, Manila</p>

                        </div>
                    </div>

                    {/* CARDS ### */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-poppins">
                        <a href="#">
                            <img className="rounded-t-lg" src="/images/plm.png" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Pamantasan ng Lungsod ng Maynila</h5>
                            </a>
                            <p className="mb-3 text-sm text-gray-500">General Luna, corner Muralla St, Intramuros, Manila</p>

                        </div>
                    </div>

                    {/* CARDS ### */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-poppins">
                        <a href="#">
                            <img className="rounded-t-lg" src="/images/plm.png" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Pamantasan ng Lungsod ng Maynila</h5>
                            </a>
                            <p className="mb-3 text-sm text-gray-500">General Luna, corner Muralla St, Intramuros, Manila</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolTransaction