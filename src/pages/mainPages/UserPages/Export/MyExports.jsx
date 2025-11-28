import { use, useEffect, useRef, useState } from "react";
import useAxios from "../../../../hooks/UseAxios";
import { AuthContext } from "../../../../context/AuthContext/AuthContext";
import MiniCards from "../../../../components/singleComponents/MiniCards";
import EmptyExport from "./EmptyExport";
import Swal from "sweetalert2";
import LoadingPage from "../../../additionalPages/Loading/LoadingPage";

function MyExports() {
  const Axios = useAxios();
  const { currentUser } = use(AuthContext);
  const [product, setProduct] = useState([]);
  const [spinner,setSpinner] = useState(true)
  useEffect(() => {
    let mount =true
    setSpinner(true)
    Axios.get(
      `/myexports?email=${currentUser?.email}`)
    .then((data) => {
      if(!mount)return
      setProduct(data.data);
      console.log(data.data);
      
      setSpinner(false)
    });

    return()=>{
      mount=false
    }

  }, [currentUser]);

  const handleDelete = (Id) => {
    setProduct((prev) => prev.filter((p) => p._id !== Id));
  };

  const modalRef = useRef();
  const [selectedProduct, setSelectedProduct] = useState([]);
  const handleModal = () => {
    modalRef.current.showModal();
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photourl = e.target.photourl.value;
    const quantity = e.target.quantity.value;
    const price = e.target.price.value;

    const UpdatedProduct = {
      name: name,
      photourl: photourl,
      quantity: quantity,
      price: price,
    };

    console.log(product);

    Axios.patch(`/products/${selectedProduct._id}`, UpdatedProduct).then(
      (res) => {
        if (res.data.matchedCount) {
          
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your product has been updated.",
            showConfirmButton: false,
            timer: 1500,
          });
          modalRef.current.close();
        }
      }
    );
  };

  if(spinner){
    return  <LoadingPage></LoadingPage>
  }

  return (
    <div className="p-10">
      {product.length === 0 && <EmptyExport />}

      {product.length > 0 && (
        <>
          <h2 className="font-[montserrat] font-light py-2">
            Showing <span className="font-bold">{product.length}</span> products
            :
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {product.map((product) => (
              <MiniCards
                key={product._id}
                product={product}
                onDelete={handleDelete}
                handleModal={handleModal}
                setSelectedProduct={setSelectedProduct}
              ></MiniCards>
            ))}
          </div>

          <dialog ref={modalRef} id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:cursor-pointer">
                  ✕
                </button>
              </form>
              <form
                onSubmit={(e) => handleUpdate(e)}
                className=" p-4 font-[montserrat] text-primary grid items-center gap-4"
              >
                <label htmlFor="Product Name " className="font-bold">
                  Product Name :{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={selectedProduct.name}
                  className="border border-gray-300 w-full p-2 rounded-lg bg-base-100 backdrop-blur-sm text-black"
                />
                <label htmlFor="Image URL " className="font-bold">
                  Image URL :{" "}
                </label>
                <input
                  type="text"
                  name="photourl"
                  defaultValue={selectedProduct.photourl}
                  className="border border-gray-300 w-full p-2 rounded-lg bg-base-100 backdrop-blur-sm text-black"
                />
                <label htmlFor="Price (USD)" className="font-bold">
                  Price (USD) :{" "}
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={selectedProduct.price}
                  className="border border-gray-300 w-full p-2 rounded-lg bg-base-100 backdrop-blur-sm text-black"
                />
                <label htmlFor="Quantity" className="font-bold">
                  Quantity :{" "}
                </label>
                <input
                  type="text"
                  name="quantity"
                  min={1}
                  defaultValue={selectedProduct.quantity}
                  className="border border-gray-300 w-full p-2 rounded-lg bg-base-100 backdrop-blur-sm text-black"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all px-3 rounded-lg bg-primary p-2 text-white hover:cursor-pointer"
                >
                  Confirm Update
                </button>
              </form>
            </div>
          </dialog>
        </>
      )}
    </div>
  );
}

export default MyExports;
