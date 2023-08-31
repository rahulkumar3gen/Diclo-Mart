import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://assets.bonkerscorner.com/uploads/2022/08/31164602/main_banner_desk.jpg"
              className="d-block w-100"
              alt="Iphone"
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.marksandspencer.in/on/demandware.static/-/Sites-mnsindia-Library/en_IN/dwac0519d7/2022/Nov_22/Desktop-Banner-2.jpg"
              className="d-block w-100"
              alt="Iphone"
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.levi.in/on/demandware.static/-/Sites-LeviIN-Library/en_IN/dw1586df9f/images/homepage/Main%20Carousel/Hindi%205011440%20X%20630DSK.jpg"
              className="d-block w-100"
              alt="Iphone"
              height="500px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://in.canon/media/image/2023/05/04/eb83eaf620ef488e82b700dd1686debd_Web-banner_1920x750_rev.jpg"
              className="d-block w-100"
              alt="Iphone"
              height="500px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Product />
    </div>
  );
};

export default Home;
