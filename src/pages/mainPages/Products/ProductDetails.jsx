import { use, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import useAxios from "../../../hooks/UseAxios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../context/AuthContext/AuthContext";

function ProductDetails() {
  const Axios = useAxios();
  const product = useLoaderData();

  const { currentUser } = use(AuthContext);

  const modalref = useRef(null);
  const handlemodal = () => {
    modalref.current.showModal();
  };
  const [isDisabled, setIsDisabled] = useState(false);
  const handleImport = (e) => {
    e.preventDefault();
    const quantity = Number(e.target.quantity.value);
    const productQuantity = {
      productID: product._id,
      name: product.name,
      photourl: product.photourl,
      rating: product.rating,
      price: product.price,
      origin: product.origin,
      email: currentUser.email,
      quantity,
    };

    Axios.post("/myimports", productQuantity).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your product has been imported",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      e.target.reset();
      modalref.current.close();
    });
  };

  return (
    <div className="p-10 font-[montserrat]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
        <div className="lg:col-span-7 space-y-4">
          <div className="relative group">
            <div className="absolute -inset-1  rounded-2xl blur-xl"></div>

            <div className="relative aspect-square rounded-2xl overflow-hidden  backdrop-blur-sm">
              <img src={product.photourl} className=" object-cover" />
              <div className="absolute top-4 right-4 flex gap-2"></div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="sticky top-24">
            <h1 className="text-primary font-bold text-4xl  mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/20  ">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
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
                    className="lucide lucide-star w-5 h-5 fill-yellow-500 text-primary"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                </div>

                <span className="text-primary ">{product.rating}</span>
              </div>

              <div className="flex-1"></div>

              <div className="flex items-center gap-2 text-primary">
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
                  className="lucide lucide-circle-check-big w-4 h-4"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl text-primary  ">
                  ${product.price}
                </span>
              </div>
              <p className="text-primary   text-sm">per unit</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative bg-base-100 shadow-xl backdrop-blur-2xl border border-white/20   rounded-xl p-4">
                  <div className="flex items-center gap-2 text-primary  mb-1">
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
                      className="lucide lucide-map-pin w-4 h-4"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-sm">Origin</span>
                  </div>

                  <p className="text-primary  ">{product.origin}</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative bg-base-100 shadow-xl  backdrop-blur-2xl border border-white/20   rounded-xl p-4">
                  <div className="flex items-center gap-2 text-primary   mb-1">
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
                      className="lucide lucide-package w-4 h-4"
                    >
                      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                      <path d="M12 22V12" />
                      <polyline points="3.29 7 12 12 20.71 7" />
                      <path d="m7.5 4.27 9 5.15" />
                    </svg>
                    <span className="text-sm">Available</span>
                  </div>

                  <p className="text-primary  ">{product.quantity} units</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="items-center gap-2 text-sm font-medium mb-3 block">
                Quantity
              </label>

              <div className="flex items-center gap-3">
                <span className="text-primary   text-sm">
                  Max: {product.quantity} units
                </span>
              </div>
            </div>

            {/* Buttons */}

            <dialog ref={modalref} className="modal">
              <div className="modal-box backdrop-blur-3xl   shadow-2xl">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="flex flex-col gap-2 p-4 text-center sm:text-left">
                  <h2 className="text-4xl font-bold leading-none   text-primary">
                    Enter the quantity you want to import for this product.
                  </h2>
                </div>
                <div className="mb-4 p-4 backdrop-blur-xl   rounded-lg">
                  <p className="text-sm text-primary">
                    Available:{product.quantity} units
                  </p>
                </div>
                <div>
                  <form onSubmit={(e) => handleImport(e)}>
                    <input
                      type="number"
                      min={1}
                      max={product.quantity}
                      placeholder="Enter quantity"
                      name="quantity"
                      onChange={(e) => setIsDisabled(e.target.value === "")}
                      className=" border border-gray-300 w-full p-4 rounded-lg bg-base-100 backdrop-blur-sm"
                    />

                    <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-center p-4">
                      <button
                        type="submit"
                        name="submitButton"
                        disabled={isDisabled}
                        className=" flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all px-3 rounded-lg bg-primary p-2"
                      >
                        Confirm Import
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>

            {/* ---------------------------------------------------- */}
            <div className="space-y-3 mb-8">
              <button
                onClick={() => handlemodal()}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-all border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 px-6 w-full rounded-lg"
              >
                Import Now
              </button>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-xl"></div>

              <div className="relative bg-blue-500/10   backdrop-blur-2xl border border-blue-200/30 dark:border-blue-400/30 rounded-xl p-4">
                <h4 className="text-primary   mb-2 flex items-center gap-2">
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
                    className="lucide lucide-circle-check-big w-5 h-5"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Premium Quality Guaranteed
                </h4>

                <ul className="text-primary   text-sm space-y-1">
                  <li>✓ Verified Supplier</li>
                  <li>✓ Quality Certifications Included</li>
                  <li>✓ Secure Payment & Logistics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
