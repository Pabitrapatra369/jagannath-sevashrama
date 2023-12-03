import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../utils/logo.png";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
const Header = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  const navigate = useNavigate();
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
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
          <Link to="/" className=" hover:text-white">
            Home
          </Link>
          <Link to="/about" className=" hover:text-white">
            About Us
          </Link>
          <Link to="/activity" className=" hover:text-white">
            Activity
          </Link>
          <Link to="/education" className=" hover:text-white">
            Education
          </Link>
          <Link to="/goushala" className=" hover:text-white">
            Goushala
          </Link>
          <Link to="/donate" className=" hover:text-white">
            Donate
          </Link>
          <Link to="/gallery" className=" hover:text-white">
            Gallery
          </Link>
          <Link to="/contact" className=" hover:text-white">
            Contact Us
          </Link>
          <button
            onClick={handleSignIn}
            className=" bg-slate-400 text rounded-lg p-1 bg-red-200 hover:bg-slate-50"
          >
            {user ? "" : "Sign In"}
          </button>
          {user && <p>Hi,{user.displayName}</p>}
          {user && (
            <button
              className="bg-slate-400 text rounded-lg p-1 bg-red-200 hover:bg-slate-50"
              onClick={handelSignOut}
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
