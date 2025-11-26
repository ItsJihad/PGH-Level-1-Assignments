import Swal from "sweetalert2";
import useAxios from "../../../../hooks/UseAxios";
import useAuth from "../../../../hooks/useAuth";

function AddExport() {
  const axios = useAxios();
  const { currentUser } = useAuth();

  const handleSubmission = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photourl = e.target.photourl.value;
    const description = e.target.description.value;
    const rating = e.target.rating.value;
    const price = e.target.price.value;
    const origin = e.target.origin.value;
    const quantity = e.target.quantity.value;

    const newProduct = {
      name,
      photourl,
      description,
      rating,
      price,
      origin,
      quantity,
      userImg: currentUser.photoURL,
      email: currentUser.email,
    };

    axios.post("/products", newProduct).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your product has been uploaded",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      e.target.reset();
    });
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto p-5">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-base-100 shadow-2xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-green-600 dark:text-green-400"
              >
                <path d="M12 3v12" />
                <path d="m17 8-5-5-5 5" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-bold">Add Export Product</h1>
              <p className="text-neutral-600 dark:text-neutral-400">
                List a new product for export on the platform
              </p>
            </div>
          </div>
        </div>

        <div className="bg-base-100  border border-blue-300/50 backdrop-blur-3xl  rounded-xl p-8 shadow-sm">
          <form onSubmit={(e) => handleSubmission(e)} className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                  <path d="M12 22V12" />
                  <polyline points="3.29 7 12 12 20.71 7" />
                </svg>
                Product Information
              </h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="name">
                    Product Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="h-10 w-full px-3 border rounded-lg bg-base-100"
                    placeholder="e.g., Premium Coffee Beans"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="image">
                    Image URL *
                  </label>
                  <input
                    id="image"
                    type="url"
                    name="photourl"
                    className="h-10 w-full px-3 border rounded-lg bg-base-100"
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    className="w-full px-3 py-2 border rounded-lg bg-base-100"
                    placeholder="Provide detailed information about the product..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-700">
              <h3 className="text-lg font-semibold mb-6">Pricing & Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="price">
                    Price (USD) *
                  </label>
                  <input
                    id="price"
                    type="number"
                    name="price"
                    min="0"
                    step="0.01"
                    className="h-10 w-full px-3 border rounded-lg bg-base-100"
                    placeholder="2500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium"
                    htmlFor="originCountry"
                  >
                    Origin Country *
                  </label>
                  <input
                    id="originCountry"
                    type="text"
                    name="origin"
                    className="h-10 w-full px-3 border rounded-lg bg-base-100"
                    placeholder="e.g., Colombia"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="rating">
                    Rating (1–5) *
                  </label>
                  <input
                    id="rating"
                    type="number"
                    name="rating"
                    min="1"
                    max="5"
                    step="0.1"
                    className="h-10 w-full px-3 border rounded-lg bg-base-100"
                    placeholder="4.8"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium"
                    htmlFor="availableQuantity"
                  >
                    Available Quantity *
                  </label>
                  <input
                    id="availableQuantity"
                    name="quantity"
                    type="number"
                    min="1"
                    className="h-10 w-full px-3 border rounded-lg bg-base-100"
                    placeholder="5000"
                    required
                  />
                </div>

                {/* <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium" htmlFor="category">Category</label>
            <input
              id="category"
              name='category'
              type="text"
              className="h-10 w-full px-3 border rounded-lg bg-base-100"
              placeholder="e.g., Food & Beverages"
            />
          </div> */}
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm"
              >
                Add Export Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddExport;
