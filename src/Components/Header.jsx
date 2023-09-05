import React from "react";
import { NavLink } from "react-router-dom";

import CartBtn from "./CartBtn";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <NavLink className="navbar-brand mx-auto fw-bold" to="/">
              <p style={{ color: "orangered" }}>DICLO MART</p>
            </NavLink>

            {isAuthenticated && <p>{user.name}</p>}

            {isAuthenticated ? (
              <button
                className="btn btn-outline-primary ms-2"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                <span className="fa fa-user-plus me-1"></span>
                Log Out
              </button>
            ) : (
              <button
                className="btn btn-outline-primary ms-auto"
                onClick={() => loginWithRedirect()}
              >
                <span className="fa fa-sign-in me-1"></span>
                Log In
              </button>
            )}

            <CartBtn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
