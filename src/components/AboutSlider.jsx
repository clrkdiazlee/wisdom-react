import React from 'react';


const AboutSlider = (props) => {
    const testimony = props.testimonies
    return (
        <div>
            <div className='w-screen pt-60'>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='-mb-40 z-10 w-72'>
                    <img src={testimony.images}></img>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='bg-blue-700 w-[40rem] h-[24rem] z-0 opacity-95 rounded-t-2xl font-poppins justify-center items-center'>
                        <div className='text-white font-medium text-3xl pt-44 px-20 text-center'>
                            "{testimony.text}"
                        </div>
                    </div>
                    <div className='flex flex-col bg-blue-900 w-[40rem] h-[6rem] rounded-b-2xl font-poppins justify-center'>
                        <div className='text-white font-bold text-2xl px-28 text-center'>
                            {testimony.name}
                        </div>
                        <div className='text-white text-2xl px-28 text-center'>
                            {testimony.role}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSlider