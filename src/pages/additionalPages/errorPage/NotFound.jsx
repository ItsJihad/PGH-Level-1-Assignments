import React from "react";
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <div class="relative bg-white grid items-center justify-center  h-screen w-screen   backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-3xl p-12 text-center shadow-2xl">
        <div class="mb-8  ">
          <div class="relative  ">
            <div class="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
            <h1 class="relative text-9xl font-bold bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              404
            </h1>
          </div>
        </div>
        <h2 class="text-black  text-4xl sm:text-9xl font-[montserrat]">Page Not Found</h2>
        <p class="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to={"/" } data-discover="true">
            <button
              data-slot="button"
              class="bg-black rounded-xl p-1.5 px-3 font-[montserrat] font-bold text-white flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-house w-4 h-4 mr-2"
                aria-hidden="true"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
              Go Home
            </button>
          </Link>
          <Link to={"/products" } data-discover="true">
            <button
              data-slot="button"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-[montserrat] text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 rounded-lg w-full sm:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-search w-4 h-4 mr-2"
                aria-hidden="true"
              >
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
              Browse Products
            </button>
          </Link>
        </div>
        <div class="pt-8 border-t border-white/20 dark:border-white/10">
          <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
            Looking for something specific?
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <Link to={"/cart"}
              class="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              
            >
              Shopping Cart
            </Link>
            <span class="text-neutral-400">•</span>
            <Link to={"/my-exports"}
              class="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
             
            >
              My Exports
            </Link>
            <span class="text-neutral-400">•</span>
            <Link to={"/my-imports"}
              class="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
               
               
            >
              My Imports
            </Link>
            <span class="text-neutral-400">•</span>
            <Link to={"/profile"}
              class="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            
              
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
