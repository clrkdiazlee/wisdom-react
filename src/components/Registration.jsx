import React, { useState } from "react";
import { Link } from "react-router-dom";


const Registration = () => {
  const [schoolName, setSchoolName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!schoolName || !email || !password || !confirmPassword || !studentAddress || !contactNumber) {
      alert("Please fill all the required fields");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      // Do something with the form data
      console.log("Form submitted");
    }
  };
  return (
    <div className="flex flex-col lg:flex-row h-screen z-0">
      <div
        className="bg-cover bg-center h-screen lg:h-auto lg:w-1/2"
        style={{ backgroundImage: "url('/images/logo-blue.jpg')" }}
      ></div>
      <div className="bg-white flex justify-center items-center flex-1 pt-3">
        <form className="w-full px-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold font-poppins text-buttonBlue mb-6 flex justify-center items-center">Create Account</h1>
          <div className="px-8 pb-8">

            {/* SCHOOL NAME */}
          <div className="mb-4">
              <label
                className="block text-gray-700 text-xs font-bold mb-2 font-poppins"
                htmlFor="school-name"
              >
                School Name
              </label>
              <input
                className="font-poppins text-xs h-12 border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="SchoolName"
                type="text"
                placeholder="Enter your School Name"
                value={schoolName}
                onChange={(event) => setSchoolName(event.target.value)}
                required
              />
            </div>

            {/* EMAIL ADDRESS */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-xs font-bold mb-2 font-poppins"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="font-poppins text-xs h-12 border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>


            {/* SCHOOL ADDRESS */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-xs font-bold mb-2 font-poppins"
                htmlFor="studentAddress"
              >
                School Address
              </label>
              <input
                className="font-poppins text-xs h-12 border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="studentAddress"
                type="text"
                placeholder="Enter your school address"
                value={studentAddress}
                onChange={(event) => setStudentAddress(event.target.value)}
                required
              />
            </div>

            {/* CONTACT NUMBER */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-xs font-bold mb-2 font-poppins"
                htmlFor="contactNumber"
              >
                Contact Number
              </label>
              <input
                className="font-poppins text-xs h-12 border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contactNumber"
                pattern="[0-9]*"
                inputmode="numeric"
                placeholder="Enter your contact number"
                value={contactNumber}
                maxLength={11}
                onChange={(event) => setContactNumber(event.target.value)}
                required
                onKeyDown={(event) => {
                  // Allow: backspace, delete, tab, escape, enter, and numeric keys
                  if (
                    event.key === "Backspace" ||
                    event.key === "Delete" ||
                    event.key === "Tab" ||
                    event.key === "Escape" ||
                    event.key === "Enter" ||
                    (event.key >= 0 && event.key <= 9)
                  ) {
                    // Allow the event to continue
                  } else {
                    // Prevent the event from continuing
                    event.preventDefault();
                  }
                }}
              />
            </div>
            
            
            {/* 2 COLUMN */}
            <div className="mb-4 flex">
              {/* PASSWORD */}
              <div className="w-1/2 mr-2">
                <label
                  className="block text-gray-700 text-xs font-bold mb-2 font-poppins"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="font-poppins text-xs h-12 border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="w-1/2 ml-2">
                <label
                  className="block text-gray-700 text-xs font-bold mb-2 font-poppins"
                  htmlFor="confirm-password"
                >
                  Confirm Password
                </label>
                <input
                  className="font-poppins text-xs h-12 border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  required
                />
              </div>
              
            </div>
            
                {/* 2 COLUMN */}
            <div className="mb-4 flex">
              {/* CITY */}
              <div className="w-1/2 mr-2">
                <label
                  className="block text-gray-700 text-xs font-bold mb-2 font-poppins"
                  htmlFor="password"
                >
                  City
                </label>
                <select
                className="font-poppins text-xs h-12 border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={city} onChange={(e) => setCity(e.target.value)} required>
                  <option value="">Select City</option>
                  <option value="Manila">Manila</option>
                  <option value="Quezon City">Quezon City</option>
                  <option value="Cebu City">Cebu City</option>
                  <option value="Davao City">Davao City</option>
                </select>
              </div>

              {/* PROVINCE */}
              <div className="w-1/2 mr-2">
                <label
                  className="block text-gray-700 text-xs font-bold mb-2 font-poppins"
                  htmlFor="password"
                >
                  Province
                </label>
                <select
                  className="font-poppins text-xs h-12 border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)} required
                >
                  <option value="">Select Province</option>
                  <option value="Metro Manila">Metro Manila</option>
                  <option value="Cebu">Cebu</option>
                  <option value="Davao del Sur">Davao del Sur</option>
                </select>
              </div>
              
            </div>



            

            {/* BUTTON */}
            <div className="flex items-center justify-between">
            <button
              className="font-poppins text-xs h-12 bg-buttonBlue hover:bg-blue-700 text-white py-2 px-4 w-full rounded-full focus:outline-none focus:shadow-outline"
             type="submit"
            >
              Register
            </button>

            </div>
            <hr className=' my-3'></hr>

            <Link to="/Login">    
	            <p className="text-xs font-light text-center text-gray-700 font-poppins">
               {" "}
                Already have Account?{" "}
                <a className="font-medium text-buttonBlue hover:underline">
                Login
                </a>
               </p>
	          </Link>
          </div>
        </form> 
      </div>
    </div>
  );
};

export default Registration;
