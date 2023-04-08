import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const submitProfile = () => {
  const navigate = useNavigate();

  axios
  .post(`/school-information-edit`, {
    
  })
}

const SchoolEditProfile = () => {
  return (
    <div>
      <div className="bg-studentHeader w-full h-40">
        <div className="flex text-4xl font-poppins font-medium justify-center pt-24 pr-[10.5rem]">
          Edit Profile
        </div>
      </div>
      <div className="flex pl-11 -mt-20 justify-center items-start">
        <div>
          <div className="w-80 h-80">
            <img src="/images/testimonies/russel.svg"></img>
          </div>
          <button
                className="font-poppins text-xs h-9 bg-white hover:bg-buttonBlue hover:text-white text-buttonBlue py-2 px-4 w-44 rounded-full focus:outline-none focus:shadow-outline border border-buttonBlue "
                type="submit"
              >
                Upload Photo
              </button>
        </div>
        <div className="flex flex-col px-6 py-6">
          <div>
            <div className="flex gap-7">
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-xs font-bold mb-2 font-poppins"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  className="font-poppins text-xs h-12 border rounded-full w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="SchoolName"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-xs font-bold mb-2 font-poppins"
                  htmlFor="last-name"
                >
                  Last Name
                </label>
                <input
                  className="font-poppins text-xs h-12 border rounded-full w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="LastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-xs font-bold mb-2 font-poppins"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="font-poppins text-xs h-12 border rounded-full w-[41.8rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Email"
                type="text"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-xs font-bold mb-2 font-poppins"
                htmlFor="course"
              >
                Course
              </label>
              <input
                className="font-poppins text-xs h-12 border rounded-full w-[41.8rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="course"
                type="text"
                placeholder="Course"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-xs font-bold mb-2 font-poppins"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="font-poppins text-xs h-12 border rounded-full w-[41.8rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex gap-5 pt-4">
              <button
                className="font-poppins text-xs h-9 bg-white hover:bg-buttonBlue hover:text-white text-buttonBlue py-2 px-4 w-44 rounded-full focus:outline-none focus:shadow-outline border border-buttonBlue "
                type="submit"
              >
                Cancel
              </button>
              <button
                className="font-poppins text-xs h-9 bg-buttonBlue hover:bg-blue-700 text-white py-2 px-4 w-44 rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Done
              </button>
            </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default SchoolEditProfile;