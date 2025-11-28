import React, { use, useEffect, useState } from "react";
import useAxios from "../../../../hooks/UseAxios";
import { AuthContext } from "../../../../context/AuthContext/AuthContext";
import ImMiniCards from "../../../../components/singleComponents/ImMiniCards";
import EmptyImport from "./EmptyImport";
import LoadingPage from "../../../additionalPages/Loading/LoadingPage";
function MyImports() {
  const Axios = useAxios();
  const { currentUser } = use(AuthContext);
  const [product, setProduct] = useState([]);
 const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    let mount=true
    setSpinner(true)
    if(!mount)return
    Axios.get(`/myimports?email=${currentUser?.email}`).then((data) => {
      setProduct(data.data);
      setSpinner(false)
    });
    return()=>{
      mount=false
    }
  }, [currentUser]);

    const handleDelete = (Id) => {
    setProduct((prev) => prev.filter(p => p._id !== Id));
  };

if(spinner){
  return <LoadingPage></LoadingPage>
}
  return (
    <div className="p-10">
      {product.length > 0 && (
        <>
          <h2 className="font-[montserrat] font-light py-2">
            Showing <span className="font-bold">{product.length}</span> products
            :
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {product.map((product) => (
              <ImMiniCards key={product._id} product={product} onDelete={(Id) => handleDelete(Id)}></ImMiniCards>
            ))}
          </div>
        </>
      )}
      {product.length === 0 && <EmptyImport />}
    </div>
  );
}

export default MyImports;
