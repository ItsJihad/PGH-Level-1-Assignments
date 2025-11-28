import { useState } from "react";
import useAxios from "../../hooks/UseAxios";
import Swal from "sweetalert2";
import NenoExportCards from "./NenoExportCards";


function MiniCards({ product,onDelete }) {
  const Axios = useAxios();
  // console.log(product._id);
  const [expo,setExpo]=useState([product])
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
        onDelete?.();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
       const remaining= expo.filter(expo=> expo._id !== product._id)
        setExpo(remaining)
    });
  };

  const handleUpdate = () => {};

  return (
    <div>
       {

        expo.map(exp=> <NenoExportCards key={product._id} product={product} handleRemove={handleRemove} ></NenoExportCards>)
        
        


       }
    </div>
  );
}

export default MiniCards;
