import React, { useState } from 'react'

function IndexCategory(props) {
    const category = props.category
    const [image, setImage] = useState(category.icon)
    return (
        <div className='flex px-7 py-6 items-center bg-white rounded-[2rem] shadow-[inset_0_3px_10px_rgba(0,0,0,0.1)] mb-8 w-72 hover:bg-buttonBlue group hover:text-white' onMouseEnter={()=>setImage(category.iconHover)} onMouseLeave={()=>setImage(category.icon)}>
            <div className='w-1/4'>
                <img src={image} alt="iconMarketing" className='' />
            </div>
            <div className='w-3/4 pl-8'>
                <div className='pb-2 text-lg font-bold'>
                    {category.title}
                </div>
                <div className='pt-2 text-sm text-gray-600 group-hover:text-white'>
                    {category.jobs}
                </div>
            </div>
        </div>
    )
}

export default IndexCategory