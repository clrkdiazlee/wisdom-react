import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Please fill all the required fields");
    
    }
  };
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 h-screen">
      <div
        className="bg-cover bg-center h-screen lg:h-auto lg:w-1/2"
        style={{ backgroundImage: "url('/images/logo-blue.jpg')" }}
      ></div>
      <div className="bg-white flex justify-center items-center flex-1 pt-3">
        <form className="w-full px-24" onSubmit={handleSubmit}>
        <h1 class="text-2xl font-bold font-poppins text-buttonBlue mb-6 flex justify-center items-center">Create Account</h1>
          <div className="px-8 pb-8">


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

            <p className="text-xs font-light text-center text-gray-700 font-poppins">
          {" "}
          Already have Account?{" "}
          <a href="#" className="font-medium text-buttonBlue hover:underline">
           Login
          </a>
        </p>
          </div>
        </form> 
      </div>
    </div>
  );
};

export default Login;
