import React from "react";
import { assets } from "../assets/asse";

const Projects = () => {
  return (
    <>
      <main className="flex-shrink-0">
        {/* <!-- Projects Section--> */}
        <section className="py-5">
          <div className="container px-5 mb-5">
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bolder mb-0">
                <span className="text-gradient d-inline">Projects</span>
              </h1>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-11 col-xl-9 col-xxl-8">
                {/* <!-- Project Card 1--> */}
                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center">
                      <div className="p-5">
                        <h2 className="fw-bolder">
                          Orange (Food delivery Website)
                        </h2>
                        <p>
                          <ul>
                            <li>
                              Led the development of a responsive food delivery
                              website, facilitating seamless browsing, ordering,
                              and delivery processes.
                            </li>
                            <li>
                              Integrated secure payment gateways and user
                              authentication mechanisms, ensuring data privacy
                              and transaction security.
                            </li>
                            <li>
                              <a
                                href="https://orange-roan.vercel.app/"
                                target="_blank"
                              >
                                Link of the project
                              </a>
                            </li>
                          </ul>
                        </p>
                      </div>
                      <img
                        className="img-fluid"
                        src={assets.project1}
                        style={{
                          width: "300px",
                          height: "400px",
                          objectFit: "contain",
                        }}
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                {/* <!-- Project Card 2--> */}
                <div className="card overflow-hidden shadow rounded-4 border-0">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center">
                      <div className="p-5">
                        <h2 className="fw-bolder">Forget Password</h2>
                        <p>
                          <ul>
                            <li>
                              led responsive Login page with email
                              Authendication Syatem.
                            </li>

                            <li>
                              NodeMailer package used to forget and reset the
                              passsword page.
                            </li>
                            <li>
                              <a
                                href="https://password-reset-ten.vercel.app/"
                                target="_blank"
                              >
                                Link of the Project
                              </a>
                            </li>
                          </ul>
                        </p>
                      </div>
                      <img
                        className="img-fluid"
                        src={assets.project2}
                        style={{
                          width: "300px",
                          height: "400px",
                          objectFit: "contain",
                        }}
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Call to action section--> */}
        <section className="py-5 bg-gradient-primary-to-secondary text-white">
          <div className="container px-5 my-5">
            <div className="text-center">
              <h2 className="display-4 fw-bolder mb-4">
                Let's build something together
              </h2>
              <a
                className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
                href="/contact"
              >
                Contact me
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
