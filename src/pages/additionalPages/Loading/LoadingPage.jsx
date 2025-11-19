import React from "react";

function LoadingPage() {
  return (
    <div className="min-h-screen  inset-0 flex items-center justify-center relative z-100 bg-base-100">
      <span className="loading loading-spinner text-primary"></span>
    </div>
  );
}

export default LoadingPage;
