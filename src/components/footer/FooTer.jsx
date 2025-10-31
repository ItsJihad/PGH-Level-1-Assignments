import React from "react";

function FooTer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <img src="/assets/logo.png" />
          <p>
            GreenNest Industries Ltd.
            <br />
            Providing reliable Plant since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Follow us</h6>
          <div className="flex gap-4 text-2xl">
            <a className="link link-hover" href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a className="link link-hover" href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a className="link link-hover" href="#">
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="flex items-center justify-center p-4">
        <p className="text-sm md:text-base">
          © 2025 GreenNest. All rights reserved.
        </p>
      </div>
      
    </div>
  );
}

export default FooTer;
