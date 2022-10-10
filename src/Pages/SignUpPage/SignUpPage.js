import React, { useRef } from "react";
import { Avatar, FileInput, Label } from "flowbite-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUpPage = () => {
    const background =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6GUpqeY8UWzbMerPMh7wbljDWFZ-zmIlAA&usqp=CAU";
    

    const avatar =
        "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=";
    
/*     const [imageUpload, setImageUpload] = useState(null);

    const handleImage = (e) => {
        const image = e.target.files[0]; 
    }
        */

  const imagRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const image = imagRef.current.value;
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(image, name, email, password);
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-rose-500 to-red-600 i justify-around items-center hidden">
        <div>
          <p className="text-white mt-1">Welcome to</p>
          <h1 className="text-white font-bold text-4xl font-sans">Sign Up!</h1>

          <Link
            to="/sign-in"
            className="block w-full  mt-4 py-2 rounded-2xl  font-semibold mb-2 text-red-600 bg-gradient-to-tr from-gray-100 to-gray-300  hover:from-gray-300 hover:to-gray-100 hover:shadow-2xl px-3"
            // style={{ background: `url(${signUpBg})` }}
          >
            Already Signed up? Go to Sign in{" "}
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </Link>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          </div>
          
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <div className="shadow-2xl p-5">
          <div className="relative overflow-hidden md:flex w-full bg-gradient-to-tr from-rose-500 to-red-600 i justify-around items-center lg:hidden p-5 mb-5">
            <div>
              <p className="text-white mt-1">Welcome to</p>
              <h1 className="text-white font-bold text-4xl font-sans">
                Sign up!
              </h1>

              <Link
                to="/sign-in"
                className="block w-full  mt-4 py-2 rounded-2xl text-red-600 font-semibold mb-2  bg-gradient-to-tr from-gray-100 to-gray-300  hover:from-gray-300 hover:to-gray-100 hover:shadow-2xl px-3"
              >
                Already Signed up? Go to Sign in{" "}
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </Link>
            </div>
          </div>
          <form 
          onSubmit={handleSubmit}
          className="bg-white">
            <div className="flex  justify-center items-center">
              <div className="flex items-center shadow-md bg-white rounded-md">
                <div className="shrink-0 mr-3">
                  <img
                    className="h-16 w-16 object-cover rounded-full"
                    src={avatar}
                    // src={imageUpload}
                    alt="profile img"
                  />
                </div>
                <label className="block">
                  <input
                    type="file"
                    // onChange={handleImage}
                    ref={imagRef}
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-600 hover:file:bg-red-100"
                  />
                </label>
              </div>
            </div>
            <div className="text-red-600 my-5">Choose profile photo</div>

            <div className="flex items-center border border-rose-400 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                placeholder="Full name"
                ref={nameRef}
              />
            </div>


            <div className="flex items-center border border-rose-400 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="email"
                placeholder="Email Address"
                ref={emailRef}
              />
            </div>
            <div className="flex items-center border border-rose-400 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
            <button
              type="submit"
              className="block w-full  mt-4 py-2 rounded-2xl text-white font-semibold mb-2 "
              style={{ background: `url(${background})` }}
            >
              Sign In
            </button>
          </form>
          {/* <span className="text-sm ml-2 hover:text-rose-500 cursor-pointer">

                        <div className="flex items-center border border-rose-400 py-2 px-3 rounded-2xl mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                />
                            </svg>
                            <input
                                className="pl-2 outline-none border-none"
                                type="text"
                                name=""
                                id=""
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="flex items-center border border-rose-400 py-2 px-3 rounded-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <input
                                className="pl-2 outline-none border-none"
                                type="password"
                                name=""
                                id=""
                                placeholder="Password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="block w-full  mt-4 py-2 rounded-2xl text-white font-semibold mb-2 "
                            style={{ background: `url(${background})` }}
                        >
                            Sign In
                        </button>
                    </form>
                    {/* <span className="text-sm ml-2 hover:text-rose-500 cursor-pointer">

                        Forgot Password ?
                    </span>
                    <hr className="mt-2 border border-rose-500" />

                    <button
                        type="submit"
                        className="block w-full bg-gradient-to-tr from-red-700 to-red-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 hover:bg-gradient-tr hover:from-red-500 hover:to-red-700"
                    >
                        <i className="fa-brands fa-google-plus"></i> Sign in with Google
                    </button>
                    <button
                        type="submit"
                        className="block w-full bg-gradient-to-tr from-slate-900 to-slate-600 hover:bg-gradient-tr hover:from-slate-600 hover:to-slate-900 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                    >
                        <i className="fa-brands fa-github"></i> Sign in with Github
                    </button> */}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
