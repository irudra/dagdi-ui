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
import { useTranslation } from "react-i18next";
// reactstrap components
import {Button, Col, Container, Row, UncontrolledCarousel} from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/agricultural-machine-1918989_1280.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/10152378-3x2-xlarge.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/cereal-1866559_1280.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

function CropsCarousel() {
  const { t } = useTranslation();
  return (
    
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h3 className="text-white font-weight-light">
                  {t("Why we matter")}
                </h3>
                <p className=" text-white mt-4">
                  {t("Why we matter description")}
                </p>
                <Button
                    className="btn-white mt-4"
                    color="default"
                    href="#"
                >
                  {t("Find more details about it")}
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
     
  );
}

export default CropsCarousel;
