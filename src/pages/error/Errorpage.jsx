import React from "react";

function Errorpage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-center p-5">
        <img src="/assets/error404.png"></img>
        <h1 className="text-6xl font-extrabold text-primary mt-5">404</h1>
        <h2 className="text-2xl font-semibold mt-3">Oops, page not found!</h2>
        <p className="opacity-70 mt-2 max-w-md">
          The page you are looking for is not available.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            className="btn btn-primary text-white shadow-lg"
            href="/"
            data-discover="true"
          >
            Go Back
          </a>
        </div>
      </div>
    </>
  );
}

export default Errorpage;
