import React, { useState } from "react";
import { Link, Links } from "react-router";

function NavBar() {
  const [logged, setLogged] = useState(true);
  const logo = <img src='/assets/logo.png' className="ml-2  " />
  return (
    <div>
      <div className="navbar  bg-base-100/30 shadow-sm backdrop-blur-xl    px-3   lg:px-15">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-xl z-10 mt-3 w-52 p-2 shadow font-[montserrat]"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/products"}>Browse Products</Link>
              </li>
              <li>
                <Link to={"/cart"}>Cart</Link>
              </li>
              
          
            </ul>
          </div>
          <div className="flex justify-center items-center">
            
            {logo}
            
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-[montserrat]  ">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/products"}>Browse Products</Link>
            </li>
           
            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>
            <li>
              <Link to={"/my-exports"}>My Exports</Link>
            </li>
            
          </ul>
        </div>
        <div className="navbar-end">
          <label className="flex cursor-pointer gap-2 px-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="dark"
              className="toggle theme-controller "
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          {logged ? (
            <div className="p-4 dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                  
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-xl z-10 mt-3 w-52 p-2 shadow"
              >
                {/* <li>
                  <Links to={"/"} className="justify-between font-[montserrat]">
                    Profile
                    <span className="badge font-[montserrat]">Importer</span>
                  </Links>
                </li>
                <li>
                  <Links to={"/"}>Settings</Links>
                </li>
                <li>
                  <Links to={"/"}>Logout</Links>
                </li> */}
              </ul>
              
            </div>
            
          ) : (
            <button className="btn btn-outline btn-primary font-[montserrat] ">Sign In/Up</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
