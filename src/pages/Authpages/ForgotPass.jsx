import { use } from "react";
import { Link,useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../firebase/Auth/AuthProvider";
import { toast, ToastContainer } from "react-toastify";


function Forgotpass() {
  const { setLoader,error,resetPassword } = use(AuthContext);

  const resetPass=()=>{
    const email = form.email.value;
    resetPassword(email)
    .then(() => {
    toast("Password  has been Reset!");
    
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    
    // ..
  });

  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    
    resetPassword(email)
    .then(() => {
        setLoader(true)
    toast("Success! Check Email")
    setLoader(false)
    
    // ..
  })
  .catch((error) => {
    setLoader(false)
  });

    
  };
  return (
    <div className="p-10">
      <ToastContainer />
      <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl p-6 space-y-6">
        <div className=" text-center justify-start text-gray-900 text-3xl  font-sans font-semibold leading-9">
          Forgot Password!
        </div>
        <div className=" text-center justify-start text-gray-600 text-base font-normal font-['Arial'] leading-6">
          Don't Worry,we are here to help...
        </div>
        {/* Email field */}
        <form onSubmit={handleLogin} className="flex justify-center items-center gap-2">
          <div className="space-y-2">
            <label className="text-neutral-950 my-4 text-sm text-center">Email Address</label>
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full pl-10 pr-3 py-2 bg-zinc-100 rounded-lg border text-gray-400 border-gray-200 text-sm outline-none"
              />
            </div>
          </div>

          
          {error? (<span className="text-red-500 text-sm">{error}</span>):""} 

            <button
            type="submit"
            onSubmit={resetPass}
            className="btn bg-green-500 mt-4 flex items-center justify-center text-sm"
            
          >
            Reset Password
          </button>
          
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2">
          
        </div>


        {/* Bottom signup link */}
        <div className="text-center text-sm text-gray-600">
          Don't have an account?
          <Link to={"/signup"} className="text-green-600  cursor-pointer">
            {" "}
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Forgotpass;
