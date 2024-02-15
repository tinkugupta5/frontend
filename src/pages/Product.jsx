import React, { useEffect } from "react";
import Layout from "./Layout";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
const Products = () => {
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default Products;