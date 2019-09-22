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
import {Button, Col, Container, Row, UncontrolledCarousel} from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/img-1-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/img-2-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

function CorpsCarousel() {
  return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Why we matter
                </h1>
                <p className="lead text-white mt-4">
                  The traditional corps does not provide a better return for the farmers. The decision to use a corp is
                  mainly based the generational or area but not with scientific knowledge and market analysis.
                  This result people using undistributed corps, which results in very low prizes for some of the popular corps and
                  very high prizes for some other corps. This results in a bad situation for farmers and also for the consumers.
                  No knowledge of upcoming weather situation and its effect on the corps results in losses for the farmer due to damaged fields,
                  corps and disease.
                </p>
                <Button
                    className="btn-white mt-4"
                    color="default"
                    href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                >
                  Find more details about it.
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden ">
                  <UncontrolledCarousel items={items}/>
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100"/>
            </svg>
          </div>
        </section>
      </>
  );
}

export default CorpsCarousel;
