import React from 'react';

const SignUpPage = () => {
    const background = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6GUpqeY8UWzbMerPMh7wbljDWFZ-zmIlAA&usqp=CAU'
    return (
        <div class="h-screen md:flex">
            <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-rose-500 to-red-600 i justify-around items-center hidden">
                <div>
                    <p class="text-white mt-1">Welcome back to</p>
                    <h1 class="text-white font-bold text-4xl font-sans">Cooking Bird!</h1>
                    {/* <button
                        type="submit"
                        class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
                    >
                        Read More
                    </button> */}
                </div>
                <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <div>
                    <form class="bg-white">
                        <h1 class=" font-bold text-2xl text-red-600 mb-10">Sign in, Please!</h1>
                        {/* <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p> */}
                        <div class="flex items-center border border-rose-400 py-2 px-3 rounded-2xl mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-gray-400"
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
                                class="pl-2 outline-none border-none"
                                type="text"
                                name=""
                                id=""
                                placeholder="Full name"
                            />
                        </div>

                        <div class="flex items-center border border-rose-400 py-2 px-3 rounded-2xl mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-gray-400"
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
                                class="pl-2 outline-none border-none"
                                type="text"
                                name=""
                                id=""
                                placeholder="Email Address"
                            />
                        </div>
                        <div class="flex items-center border border-rose-400 py-2 px-3 rounded-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-gray-400"
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
                                class="pl-2 outline-none border-none"
                                type="password"
                                name=""
                                id=""
                                placeholder="Password"
                            />
                        </div>
                        <button
                            type="submit"
                            class="block w-full  mt-4 py-2 rounded-2xl text-white font-semibold mb-2 "
                            style={{background:`url(${background})`}}
                        >
                            Sign In
                        </button>
                    </form>
                    <span class="text-sm ml-2 hover:text-rose-500 cursor-pointer mb-2">
                        Forgot Password ?
                    </span>
                    {<hr className="mt-5 border border-rose-500" />}
                    <h6>Or</h6>
                    <button
                            type="submit"
                            class="block w-full bg-gradient-to-tr from-red-700 to-red-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 hover:bg-gradient-tr hover:from-red-500 hover:to-red-700"
                        >
                        <i class="fa-brands fa-google-plus"></i> Sign in with Google
                    </button>
                    <button
                            type="submit"
                            class="block w-full bg-gradient-to-tr from-slate-900 to-slate-600 hover:bg-gradient-tr hover:from-slate-600 hover:to-slate-900 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                        >
                        <i class="fa-brands fa-github"></i> Sign in with Github
                        </button>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;