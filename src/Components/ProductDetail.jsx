import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions/index";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  //   const [cartBtn, setCartBtn] = useState("Add to Cart");
  const getProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    setProduct(await response.json());
  };
  useEffect(() => {
    getProduct();
  }, []);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.image} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">${product.price}</h2>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-dark my-5"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2">
              Go to Cart
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
