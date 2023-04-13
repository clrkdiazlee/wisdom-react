import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavbarLoggedIn() {
  const navigate = useNavigate();
  const Logout = () => {
  axios
      .post(`/logout`, {})
      .then((res) => {
        axios.defaults.headers.common['Authorization'] = ""
        localStorage.removeItem('default-token')
        console.log(res.data)
        navigate("/Login")
      })
      .catch((error) => {
        axios.defaults.headers.common['Authorization'] = ""
        localStorage.removeItem('default-token')
        console.log(error);
      })
    }

  return (
    <div className="flex justify-between px-24 w-full shadow-md shadow-slate-200 z-10">
      <div className="flex items-center">
        <div className="pr-16 py-8">
          <Link to="/">
            <img src="/images/logo_black.svg" alt="Logo" className="w-32" />
          </Link>
        </div>
        <div className="flex text-sm font-poppins">
          <ul className="flex space-x-11">
            <li>
              <Link to="/Calendar">
                Dashboard
              </Link> 
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex">
          <div className="px-5">
            <button onClick={Logout} className="bg-buttonBlue border border-buttonBlue font-bold py-2 px-4 rounded-full text-white font-poppins text-sm tracking-wider">
                Log-out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarLoggedIn;
