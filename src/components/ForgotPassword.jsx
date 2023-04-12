import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [accountRecovery, setaccountRecovery] = useState("");
  const [split, setSplit] = useState([]);


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!accountRecovery) {
      alert("Please fill all the required fields");
    }

    axios
      .post(`/forgot_password`, {
        email: accountRecovery
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      })

  };

  useEffect(() => {
    setSplit(accountRecovery.split('@'))
  }, [accountRecovery])

  console.log(accountRecovery)
  

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 h-screen">
      <div
        className="bg-logoBg h-screen lg:h-auto lg:w-full"
      ></div>
      <div className="bg-white flex justify-center items-center w-full pt-3">
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
                type="email"
                placeholder="Enter your email address"
                value={accountRecovery}
                onChange={(event) => setaccountRecovery(event.target.value)}
                required
              />
            </div>

            {/* BUTTON */}
            <div className="flex items-center justify-between">
            {
              accountRecovery.length && (split.length === 2 && split[1].length) ? 
                <>
                  <button
                    data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="font-poppins text-xs h-12 bg-buttonBlue hover:bg-blue-700 text-white py-2 px-4 w-full rounded-full focus:outline-none focus:shadow-outline"
                    type="submit"
                    >
                    Continue
                  </button>
                  <button
                    className="font-poppins text-xs h-12 bg-buttonBlue hover:bg-blue-700 text-white py-2 px-4 w-full rounded-full focus:outline-none focus:shadow-outline hidden"
                    type="submit"
                    >
                    Continue
                  </button>
                </>
                :
                <>
                  <button
                    data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="font-poppins text-xs h-12 bg-buttonBlue hover:bg-blue-700 text-white py-2 px-4 w-full rounded-full focus:outline-none focus:shadow-outline hidden"
                    type="submit"
                    >
                    Continue
                  </button>
                  <button
                    className="font-poppins text-xs h-12 bg-buttonBlue hover:bg-blue-700 text-white py-2 px-4 w-full rounded-full focus:outline-none focus:shadow-outline"
                    type="submit"
                    >
                    Continue
                  </button>
                </>
              }
              
              <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Terms of Service
                      </h3>
                      <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="p-6 space-y-6">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                      </p>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                      </p>
                    </div>
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                      <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
