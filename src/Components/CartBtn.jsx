import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CartBtn = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1" />
        Cart({state.length})
      </NavLink>
    </>
  );
};

export default CartBtn;
