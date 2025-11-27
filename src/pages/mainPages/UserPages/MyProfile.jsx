import React, { use, useState } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import useAxios from "../../../hooks/UseAxios";

function MyProfile() {
  const Axios = useAxios();
  const { currentUser } = use(AuthContext);
  const [imports, setImports] = useState([]);
  const [exports, setExports] = useState([]);
  Axios.get("myimports").then((data) => {
    setImports(data.data.length);
  });
  Axios.get("myexports").then((data) => {
    setExports(data.data.length);
  });

  return (
    <div>
      <main className="min-h-screen ">
        <div className="px-6 lg:px-12 py-12">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-primary  font-bold text-4xl   mb-2">
              My Profile
            </h1>
            <p className="text-primary ">
              Manage your account settings and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT — Avatar & Basic Stats */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-black   shadow-md rounded-2xl p-8 transition-colors">
                <div className="text-center mb-6">
                  <img
                    className="w-32 h-32 rounded-full mx-auto mb-4 shadow-sm"
                    src={currentUser?.photoURL}
                  />
                  <h2 className="text-black dark:text-white font-medium text-lg">
                    {currentUser?.displayName}
                  </h2>
                  {/* <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Import Export Hub
                </p> */}
                </div>

                <div className="space-y-4 pt-6 border-t border-blue-900 ">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700 dark:text-gray-300">
                      Member Since
                    </span>
                    <span className="text-black dark:text-white">
                      {currentUser?.metadata.creationTime}
                    </span>
                  </div>

                  {/* <div className="flex justify-between text-sm">
                  <span className="text-gray-700 dark:text-gray-300">Total Transactions</span>
                  <span className="text-black dark:text-white">2</span>
                </div> */}

                  {/* <div className="flex justify-between text-sm">
                  <span className="text-gray-700 dark:text-gray-300">Account Status</span>
                  <span className="text-green-600 dark:text-green-400 font-medium"> {currentUser?.emailVerified}Verified</span>
                </div> */}
                </div>
              </div>
            </div>

            {/* RIGHT — Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-black  shadow-sm  rounded-xl p-6 text-center transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center mx-auto mb-3">
                    📦
                  </div>
                  <p className="text-2xl text-black dark:text-white font-semibold">
                    {imports}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Total Imports
                  </p>
                </div>

                <div className="bg-white dark:bg-black shadow-sm rounded-xl p-6 text-center transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center mx-auto mb-3">
                    ⬆️
                  </div>
                  <p className="text-2xl text-black dark:text-white font-semibold">
                    {exports}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Total Exports
                  </p>
                </div>

                {/* <div className="bg-white dark:bg-black shadow-sm rounded-xl p-6 text-center transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center mx-auto mb-3">
                  💰
                </div>
                <p className="text-2xl text-black dark:text-white font-semibold">$2,558,400</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Import Value</p>
              </div> */}
              </div>

              {/* Profile Information */}
              <div className="bg-white dark:bg-black shadow-sm rounded-2xl p-8 transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-black dark:text-white font-semibold text-lg">
                    Profile Information
                  </h2>
                  {/* <button className="px-4 py-2 shadow-sm rounded-lg text-sm text-black dark:text-white bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                    Edit Profile
                  </button> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm text-gray-700 dark:text-gray-300"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      disabled
                      value={currentUser?.displayName}
                      className="h-10 px-3 rounded-lg text-sm w-full bg-gray-50 dark:bg-black text-primary opacity-80"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm text-gray-700 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      disabled
                      value={currentUser?.email}
                      className="h-10 px-3 rounded-lg text-sm w-full bg-gray-50 dark:bg-black text-primary opacity-80"
                    />
                  </div>

                  {/* <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm text-gray-700 dark:text-gray-300"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      disabled
                      value="Import Export Hub"
                      className="h-10 px-3 rounded-lg text-sm w-full bg-gray-50 dark:bg-black text-black dark:text-white"
                    />
                  </div> */}

                  {/* <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm text-gray-700 dark:text-gray-300"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      disabled
                      value="+1 (555) 123-4567"
                      className="h-10 px-3 rounded-lg text-sm w-full bg-gray-50 dark:bg-black text-black dark:text-white"
                    />
                  </div> */}

                  {/* <div className="space-y-2 md:col-span-2">
                  <label htmlFor="location" className="text-sm text-gray-700 dark:text-gray-300">Location</label>
                  <input
                    id="location"
                    disabled
                    value="New York, USA"
                    className="h-10 px-3 rounded-lg text-sm w-full bg-gray-50 dark:bg-black text-black dark:text-white"
                  />
                </div> */}
                </div>
              </div>

              {/* Recent Activity */}
              {/* <div className="bg-white dark:bg-black shadow-sm rounded-2xl p-8 transition-colors">
              <h2 className="text-black dark:text-white font-semibold mb-6">Recent Activity</h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-black rounded-lg">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                    ⬇️
                  </div>

                  <div className="flex-1">
                    <p className="text-black dark:text-white text-sm">Organic Cotton Fabric</p>
                    <p className="text-gray-700 dark:text-gray-300 text-xs">Imported 2132 units</p>
                  </div>

                  <span className="text-gray-700 dark:text-gray-300 text-xs">11/17/2025</span>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyProfile;
