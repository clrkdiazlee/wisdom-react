import React, {useState} from 'react'

const SchoolAddStudent = () => {
    const [details, setDetails] = useState({
        adv_fname: "",
        adv_lname: "",
        adv_email: "",
        program: "",
        duration: "",
    });

    const [data,setData]=useState([{
        stud_fname: "",
        stud_lname: "",
        stud_email: "",
    }]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDetails((prev) => {
            return {...prev, [name]: value}
        })
    };

    const handleChange2 = (e, i) => {
        const {name, value} = e.target;
        const onchangeVal = [...data]
        onchangeVal[i][name]=value
        setData(onchangeVal)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details);
        console.log(data);
    };

    const handleClick=()=>{
        setData([...data,{stud_fname:"", stud_lname:""}])
    }

    const handleDelete=(i)=>{
        const deleteVal = [...data]
        deleteVal.splice(i,1)
        setData(deleteVal)
    };

    return(
        <div>
            <div className='w-auto h-60'
                    style={{
                        backgroundImage: `url(/images/banner.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
            </div>

            <form onSubmit={handleSubmit} className='h-auto flex justify-center mx-auto my-20 font-poppins text-sm'>
                <div>
                    <div>
                        <h1 className='font-bold text-2xl mb-5'>Program Adviser Information</h1>
                        <div className='flex-auto md:flex gap-5'>
                            {/* NAME */}
                            <div>
                                {/* FIRST NAME */}
                                <label htmlFor="first-name" 
                                className='font-medium'>First Name</label>
                                    <input 
                                    required
                                    
                                    type="text" 
                                    name="adv_fname" 
                                    placeholder="First Name" 
                                    onChange={handleChange}
                                    className='block border rounded-2xl p-1 px-2 mt-1 mb-3' />
                            </div>
                            <div>
                                {/* LAST NAME */}
                                <label htmlFor="last-name" 
                                className='font-medium'>Last Name</label>
                                    <input 
                                    required
                                    
                                    type="text" 
                                    name="adv_lname" 
                                    placeholder="Last Name"
                                    onChange={handleChange} 
                                    className='block border rounded-2xl p-1 px-2 mt-1 mb-3' />
                            </div>
                        </div>

                        {/* EMAIL ADDRESS */}
                        <label htmlFor="email-address" 
                            className='font-medium'>Email Address</label>
                                <input 
                                required
                                type="email" 
                                name="adv_email" 
                                placeholder="Address" 
                                onChange={handleChange}
                                className='block border rounded-2xl p-1 px-2 mt-1 mb-3 w-full' />
                        
                        <hr className='my-9'></hr>
                    </div>


                    <div>
                        <h1 className='font-bold text-2xl mb-5'>Internship Information</h1>
                        <div className='flex-auto md:flex gap-5'>
                        
                            <div>
                            {/* PROGRAM */}
                            <label htmlFor="program" 
                            className='font-medium'>Program</label>
                                <input 
                                required
                                type="text" 
                                name="program" 
                                placeholder="Program" 
                                onChange={handleChange}
                                className='block border rounded-2xl p-1 px-2 mt-1 mb-3 w-full' />
                            </div>

                            <div>
                            {/* DURATION */}
                            <label htmlFor="duration" 
                            className='font-medium'>Duration</label>
                                <input 
                                required
                                type="number" 
                                min="1"
                                max="500"
                                name="duration" 
                                placeholder="Duration" 
                                onChange={handleChange}
                                className='block border rounded-2xl p-1 w-[8rem] px-2 mt-1 mb-3 w-full' />
                            </div>
                        </div>
                        <hr className='my-9'></hr>
                    </div>

                    <div >
                        <h1 className='font-bold text-2xl mb-5'>Add Student</h1>
                        
                        {
                        data.map((val,i)=>
                        <div className='flex-auto md:flex gap-5'>
                            <div>
                                {/* FIRST NAME */}
                                <label htmlFor="first-name" 
                                className='font-medium'>First Name</label>
                                    <input 
                                    required

                                    type="text" 
                                    name="stud_fname" 
                                    value={val.stud_fname}
                                    placeholder="First Name" 
                                    onChange={(e)=>handleChange2(e,i)} 
                                    className='block border rounded-2xl p-1 px-2 mt-1 mb-3' />
                            </div>
                            <div>
                                {/* LAST NAME */}
                                <label htmlFor="last-name" 
                                className='font-medium'>Last Name</label>
                                    <input 
                                    required
                                    
                                    type="text" 
                                    name="stud_lname" 
                                    value={val.stud_lname}
                                    placeholder="Last Name" 
                                    onChange={(e)=>handleChange2(e,i)}
                                    className='block border rounded-2xl p-1 px-2 mt-1 mb-3' />
                            </div>
                            <div>
                                {/* EMAIL ADDRESS */}
                                <label htmlFor="email-address" 
                                    className='font-medium'>Email Address</label>
                                        <input 
                                        required
                                        type="email" 
                                        name="stud_email" 
                                        placeholder="Address" 
                                        onChange={(e)=>handleChange2(e,i)}
                                        className='block border rounded-2xl p-1 px-2 mt-1 mb-3 w-full' />
                            </div>

                            {/* DELETE BUTTON */}
                            {
                                i == 0 ? "" : <button onClick={()=>handleDelete(i)}>Delete</button>
                            }
                        </div>
                        )
                    }

                    {/* ADD BUTTON */}
                    <button onClick={handleClick} className='border headingBlue text-headingBlue font-medium py-2 px-5 mt-5 mb-20 rounded-full text-sm' >Add Student</button>
                    
                    {/* <p>{JSON.stringify(data)}</p> */}
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button type='submit' className='bg-headingBlue text-white text-sm font-medium py-2 px-10 rounded-full'>Submit</button>
                </div>
            </form>
        </div> 
    )
}

export default SchoolAddStudent