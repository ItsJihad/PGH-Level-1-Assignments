import React, { use, useEffect, useState } from "react";
import LoadingPage from "../../../additionalPages/Loading/LoadingPage";
import useAxios from "../../../../hooks/UseAxios";
import { AuthContext } from "../../../../context/AuthContext/AuthContext";
import Card from "../../../../components/singleComponents/Card";
import MiniCards from "../../../../components/singleComponents/MiniCards";
function MyImports() {
  const Axios = useAxios();
  const { currentUser } = use(AuthContext);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    Axios.get(`/myimports?email=${currentUser.email}`).then((data) => {
      setProduct(data.data);
    });
  }, [currentUser]);

  const handleRemove=()=>{
    console.log("clicking");
    
        const Axios = useAxios()
    Axios.delete(`myimports/${product._id}`)
    .then(data=>{
        console.log(data.data);
        
    })
    }

  return (
    <div className="p-10">
      <h2 className="font-[montserrat] font-light py-2">
        Showing <span className="font-bold">{product.length}</span> products :
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {product.map((product) => (
          <MiniCards key={product._id} product={product} handleRemove={handleRemove}></MiniCards>
        ))}
      </div>
    </div>
  );
}

export default MyImports;
