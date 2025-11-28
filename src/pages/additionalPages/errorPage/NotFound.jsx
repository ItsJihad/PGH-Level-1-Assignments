import React from "react";
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative bg-white grid items-center justify-center  h-screen w-screen   backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-3xl p-12 text-center shadow-2xl p-30">
        <div className="mb-8  ">
          <div className="relative  ">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
            <h1 className="relative text-9xl font-bold bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              404
            </h1>
          </div>
        </div>
        <h2 className="text-black  text-4xl sm:text-9xl font-[montserrat]">
          Page Not Found
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <div className="grid  gap-4  items-center justify-center mb-8">
         
            <Link to={'/'}
              data-slot="button"
              className="bg-black rounded-xl p-1.5 px-3 font-[montserrat] hover:cursor-pointer font-bold text-white flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-house w-4 h-4 mr-2"
                aria-hidden="true"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
              Go Home
            </Link>
          
          
        </div>
        
      </div>
    </div>
  );
}

export default NotFound;
