import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {

  const [accountRecovery, setaccountRecovery] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!accountRecovery) {
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
          <h1 className="text-2xl font-bold font-poppins text-buttonBlue mb-6 flex justify-center items-center">Forgot Your Password?</h1>
          <div className="px-8 pb-8">


            {/* EMAIL ADDRESS */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-xs mb-2 font-poppins"
                htmlFor="accountRecovery"
              >
                Please enter your email to search your account.
              </label>
              <input
                className="font-poppins text-xs h-12 border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="accountRecovery"
                type="accountRecovery"
                placeholder="Enter your email address"
                value={accountRecovery}
                onChange={(event) => setaccountRecovery(event.target.value)}
                required
              />
            </div>


            {/* BUTTON */}
            <div className="flex items-center justify-between">
              <Link to="/ConfirmPassword">
                <button
                  className="font-poppins text-xs h-12 bg-buttonBlue hover:bg-blue-700 text-white py-2 px-4 w-full rounded-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
