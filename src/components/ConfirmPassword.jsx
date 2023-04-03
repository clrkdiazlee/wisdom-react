import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmPassword = () => {

  const [newPassword, setnewPassword] = useState("");
  const [confirmNewPassword, setconfirmNewPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newPassword || !confirmNewPassword) {
      alert("Please fill all the required fields");
    } else if (newPassword !== confirmNewPassword) {
      alert("Passwords do not match");
    } else {
      // Do something with the form data
      console.log("Form submitted");
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
          <h1 className="text-2xl font-bold font-poppins text-buttonBlue mb-6 flex justify-center items-center">Reset Account Password</h1>
          <div className="px-8 pb-8">


            {/* NEW PASSWORD */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-xs font-bold mb-2 font-poppins"
                htmlFor="newPassword"
              >
                New Password
              </label>
              <input
                className="font-poppins text-xs h-12 border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="newPassword"
                type="newPassword"
                placeholder="Enter your password"
                value={newPassword}
                onChange={(event) => setnewPassword(event.target.value)}
                required
              />
            </div>


            {/* CONFIRM PASSWORD */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-xs font-bold mb-2 font-poppins"
                htmlFor="confirmNewPassword"
              >
                Confirm Password
              </label>
              <input
                className="font-poppins text-xs h-12 border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmNewPassword"
                type="confirmNewPassword"
                placeholder="Confirm New Password"
                value={confirmNewPassword}
                onChange={(event) => setconfirmNewPassword(event.target.value)}
                required
              />
            </div>




            {/* BUTTON */}
            <div className="flex items-center justify-between">
              <button
                className="font-poppins text-xs h-12 bg-buttonBlue hover:bg-blue-700 text-white py-2 px-4 w-full rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Confirm
              </button>

            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmPassword;
