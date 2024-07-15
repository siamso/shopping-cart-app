import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { InfinitySpin } from "react-loader-spinner";
import ProductCard from "../components/ProductCard";

function Home() {
  const { loading, fetchData, products } = useContext(GlobalContext);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <InfinitySpin visible={true} width="200" color="#4fa94d" />
        </div>
      ) : (
        <div className="grid grid-cols-1 place-items-center min-h-screen row- sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
