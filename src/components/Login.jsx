import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all the required fields");
    };

    axios
      .post(`/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        let token = res.data.token
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        localStorage.setItem('default-token', token);
        console.log(res.data)
        navigate("/SchoolApplication")
      })
      .catch((error) => {
        axios.defaults.headers.common['Authorization'] = ""
        localStorage.removeItem('default-token')
        console.log(error);
      })
    }

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="bg-logoBg h-screen lg:h-auto lg:w-full"></div>
      <div className="bg-white flex w-full justify-center items-center pt-3">
        <form className="w-full px-24" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold font-poppins text-buttonBlue mb-6 flex justify-center items-center">Login</h1>
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
                Login
              </button>

            </div>
            <hr className=' my-3'></hr>

            <Link to="/ForgotPassword">
              <p className="text-xs font-light text-center text-gray-700 font-poppins">
                {" "}
                <span className="font-medium text-buttonBlue hover:underline">
                  Forgot Password
                </span>
              </p>
            </Link>

            <Link to="/Registration">
              <p className="text-xs font-light text-center text-gray-700 font-poppins">
                {" "}
                Don't have an account?{" "}
                <span className="font-medium text-buttonBlue hover:underline">
                  Create an account
                </span>
              </p>
            </Link>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
