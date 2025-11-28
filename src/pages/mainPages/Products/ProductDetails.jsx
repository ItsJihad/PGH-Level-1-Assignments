import { useEffect, useRef, useState, useContext } from "react";
import { useParams } from "react-router";
import useAxios from "../../../hooks/UseAxios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../context/AuthContext/AuthContext";

function ProductDetails() {
  const Axios = useAxios();
  const { id } = useParams();
  const { currentUser } = useContext(AuthContext);

  const [product, setProduct] = useState(null);
  const [Pquantity, setPquantity] = useState(null);
  const modalref = useRef(null);

  const handlemodal = () => {
    modalref.current.showModal();
  };
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (!id) return;
    let mounted = true;

    Axios.get(`/products/${id}`).then((res) => {
      if (!mounted) return;
      setProduct(res.data);
      setPquantity(res.data?.quantity);
    });

    return () => {
      mounted = false;
    };
  }, [id]);

  const handleImport = (e) => {
    e.preventDefault();

    const quantity = Number(e.target.quantity.value);

    if (
      !e.target.quantity.value ||
      !Number.isFinite(quantity) ||
      quantity < 1
    ) {
      setIsDisabled(true);
      Swal.fire({
        icon: "error",
        title: "Invalid quantity",
        text: "Please enter a valid quantity (>= 1).",
      });
      modalref.current.close();
      return;
    }

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
    setIsDisabled(true);

    Axios.post("/myimports", productQuantity)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your product has been imported",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        return Axios.get(`/products/${product._id}`);
      })
      .then((res) => {
        if (res && res.data) {
          setProduct(res.data);
          setPquantity(res.data.quantity);
        }
      });

    setIsDisabled(false);
    e.target.reset();
    modalref.current?.close();
  };

  if (!product) return <div className="p-10">LOADING , VERCEL IS SLOW !</div>;

  return (
    <div className="p-10 font-[montserrat]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
        <div className="lg:col-span-7 space-y-4">
          <div className="relative group">
            <div className="absolute -inset-1  rounded-2xl blur-xl"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden  backdrop-blur-sm">
              <img
                src={product.photourl}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2"></div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="sticky top-24">
            <h1 className="text-primary font-bold text-4xl  mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/20">
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
              <div className="flex items-center gap-2 text-primary"></div>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl text-primary">${product.price}</span>
              </div>
              <p className="text-primary text-sm">per unit</p>
            </div>

            <div className="bg-base-100 shadow-xl backdrop-blur-2xl border border-white/20 rounded-xl p-4">
              <h2 className="font-bold text-primary text-2xl">
                Description :{" "}
              </h2>
              {product.description}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 mb-8">
              <div className="relative group">
                <div className="relative bg-base-100 shadow-xl backdrop-blur-2xl border border-white/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <span className="text-sm">Origin :</span>
                  </div>
                  <p className="text-primary">{product.origin}</p>
                </div>
              </div>

              <div className="relative group">
                <div className="relative bg-base-100 shadow-xl backdrop-blur-2xl border border-white/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <span className="text-sm">Available :</span>
                  </div>
                  <p className="text-primary">{Pquantity} units</p>
                </div>
              </div>
            </div>

            <dialog ref={modalref} className="modal">
              <div className="modal-box backdrop-blur-3xl shadow-2xl">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                <div className="mb-4 p-4 backdrop-blur-xl rounded-lg">
                  <p className="text-sm text-primary">
                    Available:{Pquantity} units
                  </p>
                </div>

                <div>
                  <form onSubmit={handleImport}>
                    <input
                      type="number"
                      min={1}
                      max={Pquantity}
                      placeholder="Enter quantity"
                      name="quantity"
                      onChange={(e) => setIsDisabled(e.target.value === "")}
                      className="border border-gray-300 w-full p-4 rounded-lg bg-base-100 backdrop-blur-sm"
                    />

                    <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-center p-4">
                      <button
                        type="submit"
                        name="submitButton"
                        disabled={isDisabled}
                        className="flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all px-3 rounded-lg bg-primary p-2"
                      >
                        Confirm Import
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>

            <div className="space-y-3 mb-8">
              <button
                onClick={handlemodal}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-all border bg-background  hover:bg-accent hover:text-accent-foreground h-10 px-6 w-full rounded-lg"
              >
                Import Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
