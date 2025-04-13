
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProductGet from "../../hook/products/useProductGet";
import Product from "../../../data/models/Product";
import ProductResponse from "../../../data/models/ProductResponse";
import { Loader } from "../../components/Loader";
import UpdateProduct from "./UpdateProduct";
// import RetryComponent from "../components/RetryComponent";

const ProductEdit = () => {
  const { id } = useParams();
  const { ProductQuery } = useProductGet(Number(id));
  // console.log(ProductQuery.data)
  if (ProductQuery.isLoading) return <Loader />;
//   if (ProductQuery.isError) {

//     return <RetryComponent onRetry={ProductQuery.refetch} />;
//   }
  if (!ProductQuery.data) {
    console.error("Données introuvables !");
    return <div>Aucune donnée disponible</div>;
  }

  return <UpdateProduct initialData={ProductQuery.data} />;
};

export default ProductEdit;