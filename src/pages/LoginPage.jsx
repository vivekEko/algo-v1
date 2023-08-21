// react and routing
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// assets
import ekoLogo from "../assets/eko_logo.svg";
import algoLogo from "../assets/algo_logo.svg";
import openEye from "../assets/open_eye_icon.svg";
import closeEye from "../assets/close_eye_icon.svg";
import axios from "axios";
import { BASE_LINK } from "../base_api";

const LoginPage = () => {
  // refs
  const emailRef = useRef();
  const passwordRef = useRef();

  // states
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();

  // functions
  const changeEmailHandler = (e) => {
    setCredentials({ ...credentials, email: e?.target?.value });
  };
  const emailKeyDownHandler = (e) => {
    if (e.key === "ArrowDown" || e.key === "Enter") {
      passwordRef?.current?.focus();
    }
  };
  const changePasswordHandler = (e) => {
    setCredentials({ ...credentials, password: e?.target?.value });
  };
  const passwordKeyDownHandler = (e) => {
    if (e.key === "ArrowUp") {
      emailRef?.current?.focus();
    }
  };

  const loginCall = (e) => {
    setErrorText(null);
    e?.preventDefault();
    const formData = new FormData();
    formData?.append("email", credentials?.email);
    formData?.append("password", credentials?.password);
    axios
      .post(BASE_LINK + "google/login", formData)
      ?.then((res) => {
        if (res?.data?.status) {
          localStorage?.setItem("client_id", res?.data?.data?.id);
          navigate("/dashboard");
        }
      })
      ?.catch((err) => {
        setErrorText(err?.message);
      });
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden p-10 flex md:w-1/2 bg-gradient-to-tr from-[#3633b4] to-[#3D3C73]  justify-around items-center ">
        <div>
          <div className="flex items-center gap-5">
            <img src={algoLogo} alt="algo logo" className="w-32 rounded-full" />
            <h1 className="text-white font-bold text-4xl font-sans">
              ALGO-SPACE
            </h1>
          </div>
          <p className="text-white my-5 max-w-[20rem] xl:max-w-[25rem]">
            Transform reviews into growth insights with sentiment analysis,
            trends, and multi-source integration.
          </p>
          <div className="   text-white  mt-10 italic   flex gap-2">
            <span>Developed by</span>
            <a href="http://ekoinfomatics.com" target="_blank" rel="noreferrer">
              <img src={ekoLogo} alt="eko" />
            </a>
          </div>
        </div>
        {/* circle design */}
        <div className="hidden md:block absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="hidden md:block absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="hidden md:block absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="hidden md:block absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      {/* form */}
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white p-5">
        <form
          onSubmit={loginCall}
          className="bg-white w-full max-w-sm md:max-w-lg"
        >
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Hello Again!
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

          {/* email */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            {/* email icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="#9CA3AF"
            >
              <path
                stokelincecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>

            <input
              className="pl-2 outline-none border-none"
              ref={emailRef}
              value={credentials?.email}
              onChange={changeEmailHandler}
              onKeyDown={emailKeyDownHandler}
              autoFocus
              type="text"
              placeholder="Email Address"
            />
          </div>
          {/* password */}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            {credentials?.password?.length > 0 ? (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <img src={closeEye} alt="close eye" />
                ) : (
                  <img src={openEye} alt="open eye" />
                )}
              </button>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                viewBox="0 0 20 20"
                fill="#9CA3AF"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <input
              ref={passwordRef}
              className="pl-2 outline-none border-none"
              value={credentials?.password}
              onChange={changePasswordHandler}
              onKeyDown={passwordKeyDownHandler}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="block text-center w-full bg-[#3633b4] hover:bg-[#2a2873] transition-all mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
          {/* <Link
            to="/dashboard"
            className="block text-center w-full bg-[#3633b4] hover:bg-[#2a2873] transition-all mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </Link> */}
          <p
            className={`text-red-500 mt-2 font-medium flex items-center gap-2 transition-all ${
              errorText ? "visible " : "invisible"
            } `}
          >
            <span className=" rounded-full aspect-square border-red-500 border-2 w-8 flex justify-center items-center text-xl">
              !
            </span>
            <span>{errorText}</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
