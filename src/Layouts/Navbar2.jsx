import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center px-24 w-full shadow-md shadow-slate-300 relative z-10">
      <div className="flex items-center">
        <div className="py-8">
          <Link to="/">
            <img src="/images/logo_black.svg" alt="Logo" className="w-32" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
