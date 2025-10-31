import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../firebase/Auth/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

export default function Profile() {
  const {user,passUpdate} =use(AuthContext)
 
  const reWriteuser=(e)=>{
      e.preventDefault()
      const pass=e.target.elements.password.value 
      passUpdate(pass)
      .then(() => {
      // Password updated successfully
      toast("Password updated!");
    })
    .catch((error) => {
      // Handle errors
      toast(error.message);
    });
  }

  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <ToastContainer />
      
      {/* Back Button */}
      <Link to={"/"} className="flex items-center gap-2 text-sm text-neutral-900 mb-4">
        <span className="w-4 h-4 border-l-2 border-b-2 rotate-45"></span>
        Back to Home
      </Link>

      {/* Title */}
      <div className="space-y-1 mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Account Settings
        </h1>
        <p className="text-gray-600">
          Manage your account preferences and security
        </p>
      </div>

      {/* Card Container */}
      <div className="bg-white shadow-sm border border-black/10 rounded-2xl p-6 space-y-8">

        {/* Section Header */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Personal Information
          </h2>
          <p className="text-sm text-gray-600">
            Update your personal details
          </p>
        </div>

        {/* Profile Photo + Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          
          {/* Profile Image */}
          <div className=" flex items-center justify-center w-24 h-24">
            <div className="w-full h-full rounded-full border-4 border-green-200">
              <img className="flex items-center justify-center w-24 h-24  rounded-full " src={user.photoURL} />
            </div>
            
          </div>
          

        </div>

        <hr className="border-gray-200" />

        {/* Form Fields */}
        <form className="grid sm:grid-cols-2 gap-4" onSubmit={reWriteuser}>

          <div>
            <label className="text-sm text-gray-900 font-medium">Full Name</label>
            <input
              className="w-full bg-gray-100 text-gray-500 rounded-lg px-3 py-2 mt-1"
              readOnly
              disabled
              placeholder={user.displayName}
            />
          </div>

          <div>
            <label className="text-sm text-gray-900 font-medium">Email Address</label>
            <input
              className="w-full bg-gray-100 text-gray-500 rounded-lg px-3 py-2 mt-1"
              readOnly
              disabled
              placeholder={user? (user.email):("nothing")}
              name="email"
            />
          </div>

          <div>
            <label className="text-sm text-gray-900 font-medium">Update Photo URL</label>
            <input
              className="w-full bg-gray-100 text-gray-500 rounded-lg px-3 py-2 mt-1"
              readOnly
              placeholder={user.photoURL}
              name="photoUrl"
              disabled
            />
          </div>

          <div>
            <label className="text-sm text-gray-900 font-medium">Password</label>
            <input
              className="w-full bg-green-100 text-gray-500 rounded-lg px-3 py-2 mt-1"
              placeholder="********"
              name="password"
            />
          </div>

            <div className="flex justify-end">
          <button type="submit" className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
            Save Changes
          </button>
        </div>

        </form>


      </div>
    </div>
  );
}
