import React from "react";

const Contact = () => {
  return (
    <main className="flex-shrink-0">
      <section className="py-5">
        <div className="container px-5">
          <div className="bg-light rounded-4 py-5 px-4 px-md-5">
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                <i className="bi bi-envelope"></i>
              </div>
              <h1 className="fw-bolder">Get in touch</h1>
              <p className="lead fw-normal text-muted mb-0">
                Let's work together!
              </p>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <form >
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Enter your name..."
                      required
                    />
                    <label htmlFor="name">Full name</label>
                    <div className="invalid-feedback" required>
                      A name is required.
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                    <label>Email address</label>
                    <div className="invalid-feedback">
                      An email is required.
                    </div>
                    <div className="invalid-feedback">Email is not valid.</div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      required
                    />
                    <label htmlFor="phone">Phone number</label>
                    <div className="invalid-feedback" required>
                      A phone number is required.
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      type="text"
                      placeholder="Enter your message here..."
                      style={{ height: "10rem" }}
                      required
                    ></textarea>
                    <label htmlFor="message">Message</label>
                    <div className="invalid-feedback" required>
                      A message is required.
                    </div>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-lg disabled"
                      id="submitButton"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
