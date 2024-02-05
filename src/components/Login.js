import React, { useRef, useState } from "react";
import loginbg from "../components/utils/loginbg.jpg";
import Header from "../components/Header";
import { checkvalidateData } from "../components/utils/validEP";
import { auth } from "../components/utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../components/utils/userSlice";
const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errormassage, seterrormassage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const formValidation = () => {
    const massage = checkvalidateData(
      email.current.value,
      password.current.value
    );

    seterrormassage(massage);

    if (massage) return;
    if (!isSignIn) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              navigate("/");
            })
            .catch((error) => {
              // An error occurred
              seterrormassage(error.massage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormassage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
            })
          );
          navigate("/");
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormassage(errorCode + "-" + errorMessage);
        });
    }
  };
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
              ref={name}
              type="text"
              placeholder="Full Name"
              className=" w-full p-3 my-4"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="email"
            className=" w-full p-3 my-4"
          />
          <input
            ref={password}
            type="password"
            placeholder="password"
            className=" w-full p-3 my-4"
          />
          <p className="font-bold text-red-700">{errormassage}</p>
          <button
            onClick={formValidation}
            className="w-full p-3 my-4 bg-blue-500 font-semibold"
          >
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
