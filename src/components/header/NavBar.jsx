import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { signOut } from "firebase/auth";
import { Auth } from "../../firebase/firebase.config";

function NavBar() {
  const { currentUser } = use(AuthContext);

  const LoggOut = () => {
    signOut(Auth);
  };

  const logo = <img src="/assets/logo.png" className=" w-13  " />;
  return (
    <div className="  z-99 sticky top-3   px-4">
      <div className="navbar  bg-base-100/30 shadow-xl backdrop-blur-xl rounded-full lg:px-15">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-xl z-10 mt-3 w-52 p-2 shadow font-[montserrat] "
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/products"}>All Products</Link>
              </li>

              <li>
                <Link to={"/my-exports"}>My Exports</Link>
              </li>
              <li>
                <Link to={"/my-imports"}>My Imports</Link>
              </li>
              <li>
                <Link to={"/add-export"}>Add Export</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <NavLink to={"/"}> {logo}</NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-[montserrat] text-lg font-bold  ">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>All Products</NavLink>
            </li>

            {currentUser && (
              <ul className="flex">
                <li>
                  <NavLink to={"/my-exports"}>My Exports</NavLink>
                </li>
                <li>
                  <NavLink to={"/my-imports"}>My Imports</NavLink>
                </li>
              </ul>
            )}
            <li>
              <NavLink to={"/add-export"}>Add Export</NavLink>
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
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>

            <input
              type="checkbox"
              value="light"
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
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
          </label>
          {currentUser ? (
            <div className="p-4 dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    
                    src={currentUser.photoURL ? currentUser.photoURL :'/assets/profile.png'}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-xl z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink
                    to={"/my-profile"}
                    className="justify-between font-[montserrat]"
                  >
                    Profile
                    <span className="badge font-[montserrat]">Importer</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/"}>Settings</NavLink>
                </li>
                <li>
                  <NavLink onClick={() => LoggOut()}>Logout</NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/sign-in"}
              className="btn btn-outline btn-primary font-[montserrat] rounded-full "
            >
              {" "}
              Sign In/Up{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
