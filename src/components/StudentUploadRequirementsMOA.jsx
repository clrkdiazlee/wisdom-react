import React from "react";

const StudentUploadRequirementsMOA = () => {
  return (
    <div className="font-poppins flex flex-col">
      <div>
        <img src="/images/student/header.svg" alt="" className="w-full" />
      </div>
      <div className="mx-[25rem]">
        <div className="font-bold mt-16 text-[2.3rem]">Memorandum of Agreement</div>
        <div className="font-medium">Kindly submit the Memorandum of Agreement in .PDF format.</div>
        <div className="outline-dashed outline-1 outline-buttonBlue rounded-xl my-12">
          <div className="bg-buttonBlue py-10 rounded-xl bg-opacity-5 text-opacity-100 text-center justify-center items-center">
            <div className="w-full h-full flex flex-col justify-center text-[1.5rem] font-poppinsLight font-medium items-center">
              <img
                src="/images/student/studentUploadIcon.svg"
                alt=""
                className="mb-5"
              />
              <p>
                Drag & drop files or{" "}
                <button className="gap text-buttonBlue underline hover:text-blue-700">
                  Browse
                </button>
              </p>
              <div className="font-normal text-subGray text-[1.3rem]">
                Supported formats: PDF.
              </div>
              <button 
                className="font-poppins text-2xl h-9 bg-buttonBlue hover:bg-blue-700 text-white py-8 px-16 rounded-full focus:outline-none focus:shadow-outline justify-center items-center font-medium mt-10 flex"
                type="submit"
              >
                Upload a file</button>
            </div>
          </div>
        </div>
        <div className="text-[2rem] font-medium my-16 mb-10">
          To Upload
        </div>
        <div className=" h-60 rounded-lg mb-16">
          <div className="bg-gray-200 w-72 h-full rounded-xl mx-10">
  
          </div>
        
        </div>
        <div className=" my-16 text-right flex flex-row justify-end">
          <button   
                className="font-poppins text-2xl h-9 bg-white hover:bg-buttonBlue hover:text-white text-buttonBlue py-8 px-20 rounded-full focus:outline-none focus:shadow-outline border border-buttonBlue justify-center items-center font-medium flex"
                type="submit"
              >
                Cancel
              </button>
              <button 
                className="font-poppins text-2xl h-9 bg-buttonBlue hover:bg-blue-700 text-white py-8 px-20 rounded-full focus:outline-none focus:shadow-outline ml-12 justify-center items-center font-medium flex"
                type="submit"
              >
                Upload</button>
        </div>
      </div>
    </div>
  );
};

export default StudentUploadRequirementsMOA;
