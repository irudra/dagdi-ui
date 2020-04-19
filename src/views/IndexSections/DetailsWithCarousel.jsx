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
import { Button, Col, Container, Row, UncontrolledCarousel } from "reactstrap";
import { useTranslation } from "react-i18next";
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

function DetailsWithCarouselFunction(){
    const { t } = useTranslation();
    return <section className="section ">
    <Row className="justify-content-start align-items-start">
        <Col className="mb-lg-0" lg="4">
            <Container>
            <div className="rounded shadow overflow-hidden ">
                <UncontrolledCarousel items={items} />
                </div>
            </Container>
        </Col>
        <Col className="mb-5 mb-lg-0" lg="8">
            <Container>
            <h1 className="text-dark font-weight-light">
            {t("Why we matter")}
</h1>
            <p className="lead text-Bls mt-4">
               {t("Why we matter description")} 
</p>
            <Button
                className="btn-white mt-4"
                color="default"
                href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
            >
                {t("Find more details about it")}
</Button>
</Container>
        </Col>
    </Row>
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
        <polygon className="fill-white" points="2560 0 2560 100 0 100" />
    </svg>
</div>
</section>
}

class DetailsWithCarousel extends React.Component {
    render() {
        return (
            <>
                <DetailsWithCarouselFunction/>
            </>
        );
    }

}
export default DetailsWithCarousel;