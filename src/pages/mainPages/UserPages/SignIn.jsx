import React from "react";
import { Link } from "react-router";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100   px-4">
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
        <div className="bg-base-100   shadow-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-neutral-200   font-[montserrat]">
          {/* Icon */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-white w-6 h-6 sm:w-8 sm:h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                <path d="M12 22V12" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <path d="m7.5 4.27 9 5.15" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2">
              Welcome Back
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              Sign in to your account to continue
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4 sm:space-y-5">
            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm text-primary font-medium block">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 sm:py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 text-primary bg-white   focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
                aria-label="Email"
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm text-primary font-medium">
                  Password
                </label>
                <a
                  href="/forgot-password"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Forgot?
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 sm:py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 text-primary bg-white   focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
                aria-label="Password"
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm sm:text-base transition"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-5 sm:my-6 flex items-center">
            <div className="flex-grow border-t border-neutral-200 dark:border-neutral-800" />
            <span className="px-3 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              Or continue with
            </span>
            <div className="flex-grow border-t border-neutral-200 dark:border-neutral-800" />
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-neutral-300  text-primary  bg-white   hover:bg-neutral-100 dark:hover:bg-green-300 transition text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Register */}
          <p className="text-center mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Don't have an account?{" "}
            <Link to={"/sign-up"} className="text-blue-600 dark:text-blue-400 hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
