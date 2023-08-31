import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos culpa repudiandae, blanditiis laborum rerum labore
              porro magnam eos facilis, reprehenderit, voluptatem eveniet nisi
              temporibus harum! Laboriosam iusto ducimus voluptate ratione
              explicabo. Eaque, hic nobis sed maxime aliquid placeat, excepturi
              cupiditate deserunt adipisci mollitia fugiat itaque libero et
              earum facilis ipsum in enim? Vel delectus id animi molestiae
              ratione aut blanditiis consectetur, eaque ex aliquid quisquam,
              quis quaerat illo nesciunt labore debitis dignissimos cupiditate
              explicabo voluptatem velit, molestias incidunt vitae laboriosam
              ut. Esse obcaecati vitae earum? Obcaecati explicabo laudantium
              sunt ipsum consectetur, dolore est hic ut nobis aliquam! Facilis,
              alias et.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              {" "}
              Contact Us{" "}
            </NavLink>
          </div>
          <div className="col-md-6">
            <img
              src="data:image/png;base64,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"
              alt="about us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
