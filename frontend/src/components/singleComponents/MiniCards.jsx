import { useState } from "react";
import useAxios from "../../hooks/UseAxios";
import Swal from "sweetalert2";
import NenoExportCards from "./NenoExportCards";

function MiniCards({ product, onDelete, handleModal, setSelectedProduct }) {
  const Axios = useAxios();

  const [expo, setExpo] = useState([product]);
  const handleRemove = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`/myexports/${product._id}`);
        onDelete(product._id);
        Swal.fire({
          title: "Deleted!",
          text: "Your export has been deleted.",
          icon: "success",
        });
      }
      const remaining = expo.filter((expo) => expo._id !== product._id);
      setExpo(remaining);
    });
  };

  const handleClick = (id) => {
    try {
      Axios.get(`/products/${id}`).then((res) => {
        setSelectedProduct(res.data);
      });
    } catch (error) {
      // console.log(error);
    }
    
    handleModal();
  };

  return (
    <div>
      {expo.map((exp) => (
        <NenoExportCards
          key={product._id}
          product={product}
          handleRemove={handleRemove}
          handleClick={handleClick}
        ></NenoExportCards>
      ))}
    </div>
  );
}

export default MiniCards;
