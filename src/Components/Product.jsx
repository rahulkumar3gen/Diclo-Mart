import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Product = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Product</h1>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {users.map((curElem) => {
            return (
              <div className="col-md-4 mb-5" key={curElem.id}>
                <div
                  className="card h-100 my-5 py-4"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={curElem.image}
                    className="card-img-top"
                    alt={curElem.title}
                    height="250px"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      {curElem.title.substring(0, 20)}
                    </h5>
                    <p className="card-text lead">${curElem.price}</p>
                    <NavLink
                      to={`/products/${curElem.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
