import React, { useEffect, useState } from "react";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Route/Footer";

import ProductDetails from "../Components/Products/ProductDetails";
import SuggestedProduct from "../Components/Products/SuggestedProduct";

import { useParams } from "react-router-dom";
import { productData } from "../Static/data";

const ProductDetailsPage = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const productName = name.replace(/-/g, " ");

  useEffect(() => {
    const data = productData.find((i) => i.name === productName);
    setData(data);
  }, []);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
