import React from 'react'

function TextBanner() {
  return (
    <div>
      <div className="box mt-3 bg-base-100/50 backdrop-blur-3xl rounded-xl">
  <div className="bg-gray px-4 lg:px-0 rounded lg:rounded-lg w-full py-8 grid grid-cols-2 lg:grid-cols-5 gap-4">

    <div className="flex items-start md:items-center justify-start lg:justify-center space-x-2">
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
        className="lucide lucide-shield-check size-4 sm:size-6 text-emerald-500"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
      <span className="text-[10px] sm:text-[13px] xl:text-sm font-medium text-slate-700">
        100% Genuine Products
      </span>
    </div>

    <div className="flex items-start md:items-center justify-start lg:justify-center space-x-2">
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
        className="lucide lucide-rocket size-4 sm:size-6 text-blue-500"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>
      <span className="text-[10px] sm:text-[13px] xl:text-sm font-medium text-slate-700">
        Super fast Delivery
      </span>
    </div>

    <div className="flex items-start md:items-center justify-start lg:justify-center space-x-2">
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
        className="lucide lucide-credit-card size-4 sm:size-6 text-orange-400"
      >
        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
        <line x1="2" x2="22" y1="10" y2="10"></line>
      </svg>
      <span className="text-[10px] sm:text-[13px] xl:text-sm font-medium text-slate-700">
        36 Months Installments
      </span>
    </div>

    <div className="flex items-start md:items-center justify-start lg:justify-center space-x-2">
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
        className="lucide lucide-refresh-ccw size-4 sm:size-6 text-purple-500"
      >
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
        <path d="M3 3v5h5"></path>
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
        <path d="M16 16h5v5"></path>
      </svg>
      <span className="text-[10px] sm:text-[13px] xl:text-sm font-medium text-slate-700">
        2 Years Replacement
      </span>
    </div>

    <div className="items-start md:items-center justify-start lg:justify-center space-x-2 hidden lg:flex">
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
        className="lucide lucide-tag size-4 sm:size-6 text-red-500"
      >
        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
      </svg>
      <span className="text-[10px] sm:text-[13px] xl:text-sm font-medium text-slate-700">
        Best Price in BD
      </span>
    </div>

  </div>
</div>

    </div>
  )
}

export default TextBanner
