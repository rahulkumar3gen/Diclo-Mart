import React from "react";
import Message from "./Message";

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Questions?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="https://blog.vantagecircle.com/content/images/2022/01/Team-Meeting--Ideas.png"
              alt="Contact Us"
              height="300px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label for="exampleForm" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleForm"
                  placeholder="Type Your Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleForm" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <Message label={"Send Message"} toastMessage={"Messge Sent"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
