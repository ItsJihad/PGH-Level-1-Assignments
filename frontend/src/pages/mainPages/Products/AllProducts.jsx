import SearchComponent from "../../../components/singleComponents/SearchComponent";
import Card from "../../../components/singleComponents/Card";
import useAxios from "../../../hooks/UseAxios";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import LoadingPage from "../../additionalPages/Loading/LoadingPage";

function AllProducts() {
  const {currentUser}=use(AuthContext)
  const Axios = useAxios();
  const [product, setProduct] = useState([]);
   
  const [spinner,setSpinner] = useState(true)

  useEffect(()=>{
    let mounted =true
    setSpinner (true)
    Axios.get("/products").then((data) => {
      if(!mounted)return
    setProduct(data.data);
     setSpinner(false)
  });
  return ()=>{
    mounted=false
    
  }
  },[currentUser])

 if(spinner){
  return  <LoadingPage></LoadingPage>
 }

  return (
    <div className="p-5 lg:px-15">
      <div>
        <div></div>
        <h2 className="font-[montserrat] text-5xl py-2">All Products</h2>
        <div className="grid md:grid-cols-2 ">
          <div>
            <h2 className="font-[montserrat] font-light  py-2">
              Browse our complete collection of export products from verified
              suppliers
            </h2>
          </div>

          <div className="flex items-center md:justify-end">
            <SearchComponent></SearchComponent>
          </div>
        </div>
      </div>

      <h2 className="font-[montserrat] font-light py-2">
        Showing <span className="font-bold">{product.length}</span> products :
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {product.map((product) => (
          <Card key={product._id} product={product}></Card>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
