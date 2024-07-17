import React from "react";
import { assets } from "../assets/asse";

const Resume = () => {
  return (
    <main className="flex-shrink-0">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Resume</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            {/* <!-- Experience Section--> */}
            <section>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="text-primary fw-bolder mb-0">Internship</h2>
                {/* <!-- Download resume button-->
                                <!-- Note: Set the link href target to a PDF file within your project--> */}
                <a 
                  className="btn btn-primary px-4 py-3"
                  download={assets.resume}
                  href={assets.resume}
                >
                  <div  className="d-inline-block bi bi-download me-2"></div>
                 <p className="down">Download Resume</p> 
                </a>
              </div>
              {/* <!-- Experience Card 1--> */}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">
                          May2024 - July2024
                        </div>
                        <div className="small fw-bolder">
                          MERN full stack Developer (Remote)
                        </div>
                        <div className="small text-muted">
                          VeriTech Software IT Services{" "}
                        </div>
                        <div className="small text-muted">Pune, IND</div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div>
                        <ul>
                          <li>
                            Intern at VeriTech Software IT Services as a Mern
                            full stack Developer from May-24 – June-24.
                          </li>
                          <li>
                            Working closely with teams under Web Development and
                            Creating the response web designs
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- Education Section--> */}
            <section>
              <h2 className="text-secondary fw-bolder mb-4">Education</h2>
              {/* <!-- Education Card 1--> */}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-secondary fw-bolder mb-2">
                          2021 - 2023
                        </div>
                        <div className="mb-2">
                          <div className="small fw-bolder">
                            Vels Institute of Science, Technology & Advanced
                            Studies (VISTAS)
                          </div>
                          <div className="small text-muted">Chennai, IND</div>
                        </div>
                        <div className="fst-italic">
                          <div className="small text-muted">Master's of</div>
                          <div className="small text-muted">
                            Computer Application
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div>
                        <ul>
                          <li>
                            I learned advanced topics such as responsive web
                            design, front-end and back-end development, and
                            cloud computing. I became proficient in HTML, CSS,
                            JavaScript, React, Node.js, and SQL.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-secondary fw-bolder mb-2">
                          2017 - 2020
                        </div>
                        <div className="mb-2">
                          <div className="small fw-bolder">
                            Sri Chandrasekharendra Saraswathi Viswa
                            Mahavidyalaya (SCSVMV)
                          </div>
                          <div className="small text-muted">Kanchipuram, IND</div>
                        </div>
                        <div className="fst-italic">
                          <div className="small text-muted">Undergraduate</div>
                          <div className="small text-muted">
                            Computer Application
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div>
                        <ul>
                          <li>
                            In my BCA degree, I focused on core subjects like
                            database management, web development, and software
                            engineering. These courses gave me a strong
                            foundation in computer science principles and
                            programming.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- Divider--> */}
            <div className="pb-5"></div>
            {/* <!-- Skills Section--> */}
            <section>
              {/* <!-- Skillset Card--> */}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  {/* <!-- Professional skills list--> */}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-tools"></i>
                      </div>
                      <h3 className="fw-bolder mb-0">
                        <span className="text-gradient d-inline">
                          Professional Skills
                        </span>
                      </h3>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Web Development
                        </div>
                      </div>
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          User Interface Design
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Full stack Development
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-0">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-code-slash"></i>
                      </div>
                      <h3 className="fw-bolder mb-0">
                        <span className="text-gradient d-inline">Languages</span>
                      </h3>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Express.js
                        </div>
                      </div>
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Node.js
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          React.js
                        </div>
                      </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3">
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          MongoDB
                        </div>
                      </div>
                      <div className="col mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          JavaScript
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                          Java
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
