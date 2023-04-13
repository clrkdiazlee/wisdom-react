import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
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
              <Link to="/About">
                About
              </Link> 
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex">
          <div className="px-5">
            <button className="bg-buttonBlue border border-buttonBlue font-bold py-2 px-4 rounded-full text-white font-poppins text-sm tracking-wider">
              <Link to="/Registration">
                Join Now
              </Link>
            </button>
          </div>
          <div>
            <button className="font-bold py-2 px-4 border border-buttonBlue rounded-full text-buttonBlue font-poppins text-sm tracking-wide">
              <Link to="/Login">
                Log In
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
