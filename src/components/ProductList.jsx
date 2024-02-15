import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">List of Products</h2>
      <Link to="/products/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
            <tr >
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link
               
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
         
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;