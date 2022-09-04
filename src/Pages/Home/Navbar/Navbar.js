import React from "react";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
      <a
      href="/"
      className="text-base font-medium text-gray-500 hover:text-red-500"
    >
      Home
    </a>
      </li>
      <li>
      <a
      href="/"
      className="text-base font-medium text-gray-500 hover:text-red-500"
    >
      Menu
    </a>
      </li>
      <li>
      <a
      href="/"
      className="text-base font-medium text-gray-500 hover:text-red-500"
    >
      About
    </a>
      </li>
      <li>
      <a
      href="/"
      className="text-base font-medium text-gray-500 hover:text-red-500"
    >
      Book Table
    </a>
      </li>
    </>

  );
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-8">
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
             {menuItems} 
            </ul>
          </div>

          <a
            className="flex flex-row-reverse items-center justify-center"
            href="/"
          >
            <h1 id="navStyle" className="font-bold hover:text-red-500">COOKING BIRD</h1>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDJ8pS9IUwJZbkvWjpd0xhQr6qxeIOZszWOA&usqp=CAU&fbclid=IwAR0IFtYIHwftcqBkKFZ8FSzseKRNDlRbk-WCw4HY3cKzlHybAIBVXHnC5qY"
              alt=""
            />
          </a>

        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>

        <div class="navbar-end">
          
        <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="badge badge-sm indicator-item">8</span>
          </div>
        </label>

        <div
          tabindex="0"
          class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div class="card-body">
            <span class="font-bold text-lg">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
          
          <div class="dropdown dropdown-end">
            
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="" />
              </div>
            </label>

            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/" class="justify-between">Profile<span class="badge">New</span></a>
              </li>
              <li><a href="/">Settings</a></li>
              <li><a href="/">Logout</a></li>
            </ul>
          </div>
          <a
            href="/"
            className="ml-3 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600"
          >
            Sign in
          </a>
        </div>
      </div>



    </div>
  );
};

export default Navbar;
