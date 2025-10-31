import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { AuthContext } from "../../firebase/Auth/AuthProvider";
import Spinner from "../../pages/Loading/Spinner";

function NavBar() {
  const { user, loader, setLoader } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);

  const slogout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    if (user) {
      setLoggedIn(true);
      setLoader(false);
    } else {
      setLoggedIn(false);
    }
  }, [user]);

  if (loader) {
    return <Spinner />;
  }

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-10">
      {/* Left Section */}
      <div className="navbar-start">
        {/* Mobile Menu Button */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          {/* Dropdown Menu (Mobile) */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/plants">Plants</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-sans font-semibold">
          <img src="/assets/logo.png" className="w-8 h-8" alt="logo" />
          GreenNest
        </Link>
      </div>

      {/* Middle Section (Desktop Links) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold font-sans">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/plants">Plants</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end">
        {loggedIn ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="avatar" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              <li>
                <span className="text-xl font-bold text-center p-2 block">
                  {user?.displayName?.toUpperCase()}
                </span>
              </li>
              <li><Link to="/profile">Settings</Link></li>
              <li><button onClick={slogout}>Logout</button></li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2 text-base">
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            /
            <Link to="/signup" className="hover:underline">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
