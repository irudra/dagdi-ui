/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-lg section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-primary">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-4">
              <div className="container shape-container d-flex align-items-center py-4">
                <div className="col px-0">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 text-center">
                      <img src={require("assets/img/brand/dagdi_logo.png")} style={{ width: 200 }} className="img-fluid" alt={"Dagdi"}/>
                      <p className="lead text-white">An intelligent System to solve day-to-day life problems of Rural
                          Areas</p>
                      <div className="btn-wrapper mt-5">
                        <Link to="landing-page" fragment="prediction" className="btn btn-lg btn-white btn-icon mb-3 mb-sm-0">
                          <span className="btn-inner--icon"><i className="ni ni-cloud-download-95" /></span>
                          <span className="btn-inner--text">Dagdi prediction System</span>
                        </Link>
                      </div>
                      <div class="mt-5">
                        <small class="text-white font-weight-bold mb-0 mr-2">*proudly created by</small>
                        <a href="https://github.com/appBuddyin" class="text-light">
                          <img src={require("assets/img/brand/appbuddylogo.png")} style={{ height: "28px" }} alt={"Appbuddy Technology"}/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
