import React, { useState } from "react";
import loginbg from "../utils/loginbg.jpg";
import Header from "../components/Header";
const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const handlesignInUp = () => {
    setisSignIn(!isSignIn);
  };
  return (
    <div className=" w-full">
      <img className=" absolute -z-10" src={loginbg} alt="login bg" />
      <Header />
      <div className=" absolute w-96 h-[600px] bg-black m-20 py-20 px-10 opacity-80">
        <div className=" ">
          <h1 className=" text-white text-4xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className=" w-full p-3 my-4"
            />
          )}
          <input type="text" placeholder="email" className=" w-full p-3 my-4" />
          <input
            type="password"
            placeholder="password"
            className=" w-full p-3 my-4"
          />
          <button className="w-full p-3 my-4 bg-blue-500 font-semibold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className=" text-white cursor-pointer font-bold"
            onClick={handlesignInUp}
          >
            {isSignIn
              ? "New to this Page? Sign Up now"
              : "Alredy Registered ?Sign In now"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
