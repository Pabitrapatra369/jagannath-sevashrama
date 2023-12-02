import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../utils/logo.png";
const Header = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className=" w-full h-15 p-5  bg-blue-800 text-white px-36 flex justify-between">
        <div className=" font-bold ">
          Phone: (+91) 9560 966 544 | Email: support@igvt.org
        </div>
        <div>
          <Link>🟢</Link>
          <Link>🟢</Link>
          <Link>🟢</Link>
          <Link>🟢</Link>
        </div>
      </div>
      <div className=" w-full  h-14 flex justify-between items-center px-40  ">
        <div>
          <img src={logo} alt="imgw" className=" h-14 w-14" />
        </div>
        <div className="  flex gap-5 font-semibold  ">
          <Link className=" hover:text-white">Home</Link>
          <Link className=" hover:text-white">About Us</Link>
          <Link className=" hover:text-white">Activity</Link>
          <Link className=" hover:text-white">Education</Link>
          <Link className=" hover:text-white">Goushala</Link>
          <Link className=" hover:text-white">Donate</Link>
          <Link className=" hover:text-white">Gallery</Link>
          <Link className=" hover:text-white">Contact Us</Link>
          <button
            onClick={handleSignIn}
            className=" bg-slate-400 text rounded-lg p-1 bg-red-200 hover:bg-green-400"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
