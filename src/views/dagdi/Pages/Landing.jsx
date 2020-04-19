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
import CardsFooter from "components/Footers/CardsFooter.jsx";
// core components
import DagdiNavbar from "components/Navbars/DagdiNavbar.jsx";
import React from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-scroll";
// reactstrap components
import {Badge, Button, Card, CardBody, CardImg, Col, Container, Row} from "reactstrap";
import CropsCarousel from "views/dagdi/CropsCarousel";
// index page sections
import ContactUs from "../ContactUs";
import Marketing from "../Marketing";
import OurMission from "../OurMission";
import LocationSearch from "../prediction/LocationSearch";

function LandingFunction() {

    const value = {
        to:'/prediction-requirement'
    };
    const { t } = useTranslation();
    return <div>
        <DagdiNavbar />
        <main >
            <div className="position-relative">
                {/* shape Hero */}
                <section className="section section-lg section-shaped pb-250">
                    <div className="shape shape-style-1 shape-primary">
                    </div>
                    <Container className="py-lg-md d-flex">
                        <div className="col px-0">
                            <Row>
                                <Col lg="9">
                                    <h1 className="display-3 text-white">
                                        {t("Dagdi Crop Prediction System")}{" "}
                                        <span>{t("An intelligent system to help farmers")}</span>
                                    </h1>
                                    <p className="lead text-white">
                                        {t("Landing page description")}

                                    </p>
                                    <LocationSearch {...value}/>
                                </Col>
                            </Row>
                            <Row className={"mt-5"}>
                                <Col lg={"3"} className={"center"}>
                                    <div className="input-group input-group-append">
                                        <Button color="primary"><Link to={"details"} smooth={true} offset={-50}>
                                            {t("Get to know More detail")}
                                        </Link></Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
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
                            <polygon
                                className="fill-white"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </section>
                {/* 1st Hero Variation */}
            </div>
            <section id="details" className="section section-lg pt-lg-0 mt--200">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="12">
                            <Row className="row-grid">
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0">
                                        <CardBody className="py-5">
                                            <div
                                                className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                <i className="ni ni-check-bold" />
                                            </div>
                                            <h6 className="text-primary text-uppercase">
                                                {t("Location based")}
                                            </h6>
                                            <p className="description mt-3">
                                                {t("location based example")}
                                            </p>
                                            <div>
                                                <Badge color="primary" pill className="mr-1">
                                                    {t("water")}
                                                </Badge>
                                                <Badge color="primary" pill className="mr-1">
                                                    {t("terrain")}
                                                </Badge>
                                                <Badge color="primary" pill className="mr-1">
                                                    {t("soil")}
                                                </Badge>
                                                <Badge color="primary" pill className="mr-1">
                                                    {t("climate")}
                                                </Badge>
                                            </div>
                                            <Button
                                                className="mt-4"
                                                color="primary"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                {t("Learn more")}
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0">
                                        <CardBody className="py-5">
                                            <div
                                                className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                <i className="ni ni-istanbul" />
                                            </div>
                                            <h6 className="text-success text-uppercase">
                                                {t("Market based")}
                                            </h6>
                                            <p className="description mt-3">
                                                {t("Market based details")}
                                            </p>
                                            <div>
                                                <Badge color="success" pill className="mr-1">
                                                    {t("business")}
                                                </Badge>
                                                <Badge color="success" pill className="mr-1">
                                                    {t("market")}
                                                </Badge>
                                                <Badge color="success" pill className="mr-1">
                                                    {t("demand")}
                                                </Badge>
                                            </div>
                                            <Button
                                                className="mt-4"
                                                color="success"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                {t("Learn more")}
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0">
                                        <CardBody className="py-5">
                                            <div
                                                className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                <i className="ni ni-planet" />
                                            </div>
                                            <h6 className="text-warning text-uppercase">
                                                {t("Preferences Based")}
                                            </h6>
                                            <p className="description mt-3">
                                                {t("Preferences Based details")}
                                            </p>
                                            <div>
                                                <Badge color="warning" pill className="mr-1">
                                                    {t("Investment")}
                                                </Badge>
                                                <Badge color="warning" pill className="mr-1">
                                                    {t("Labour")}
                                                </Badge>
                                                <Badge color="warning" pill className="mr-1">
                                                    {t("Time")}
                                                </Badge>
                                                <Badge color="warning" pill className="mr-1">
                                                    {t("Effort")}
                                                </Badge>
                                            </div>
                                            <Button
                                                className="mt-4"
                                                color="warning"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                {t("Learn more")}
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <OurMission />
            <CropsCarousel />
            <section className="section bg-secondary">
                <Container>
                    <Row className="row-grid align-items-center">
                        <Col md="6">
                            <Card className="bg-default shadow border-0">
                                <CardImg
                                    alt="..."
                                    src={require("assets/img/theme/webimage.jpg")}
                                    top
                                />
                                <blockquote className="card-blockquote">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg-bg"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 583 95"
                                    >
                                        <polygon
                                            className="fill-default"
                                            points="0,52 583,95 0,95"
                                        />
                                        <polygon
                                            className="fill-default"
                                            opacity=".2"
                                            points="0,42 583,95 683,0 0,95"
                                        />
                                    </svg>
                                    <h4 className="display-3 font-weight-bold text-white">
                                        {t("Design System")}
                                    </h4>
                                    <p className="lead text-italic text-white">
                                        {t("Design System details")}
                                    </p>
                                </blockquote>
                            </Card>
                        </Col>
                        <Col md="6">
                            <div className="pl-md-5">
                                <div
                                    className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                                    <i className="ni ni-settings" />
                                </div>
                                <h3>{t("Our customers")} </h3>
                                <p className="lead">
                                    Our customer are farmers and other government agencies which are trying to increase income of farmers.
                                </p>
                                <p>
                                    Our users gets benefits of the latest market trends and superb prediction to get maximum benefit.
                                </p>
                                <a
                                    className="font-weight-bold text-warning mt-5"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section pb-0 bg-gradient-warning">
                <Container>
                    <Row className="row-grid align-items-center">
                        <Col className="order-lg-2 ml-lg-auto" md="6">
                            <div className="position-relative pl-md-5">
                                <img
                                    alt="..."
                                    className="img-center img-fluid"
                                    src={require("assets/img/ill/ill-2.svg")}
                                />
                            </div>
                        </Col>
                        <Col className="order-lg-1" lg="6">
                            <div className="d-flex px-3">
                                <div>
                                    <div
                                        className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                        <i className="ni ni-building text-primary" />
                                    </div>
                                </div>
                                <div className="pl-4">
                                    <h4 className="display-3 text-white">{t("Modern Interface")}</h4>
                                    <p className="text-white">
                                        {t("Modern Interface details")}
                                    </p>
                                </div>
                            </div>
                            <Card className="shadow shadow-lg--hover mt-5">
                                <CardBody>
                                    <div className="d-flex px-3">
                                        <div>
                                            <div
                                                className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                <i className="ni ni-satisfied" />
                                            </div>
                                        </div>
                                        <div className="pl-4">
                                            <h5 className="title text-success">
                                                {t("Awesome Support")}
                                            </h5>
                                            <p>
                                                {t("Awesome Support details")}
                                            </p>
                                            <a
                                                className="text-success"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                {t("Learn more")}
                                            </a>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className="shadow shadow-lg--hover mt-5">
                                <CardBody>
                                    <div className="d-flex px-3">
                                        <div>
                                            <div
                                                className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                <i className="ni ni-active-40" />
                                            </div>
                                        </div>
                                        <div className="pl-4">
                                            <h5 className="title text-warning">
                                                {t("Modular Components")}
                                            </h5>
                                            <p>
                                                {t("Modular Components details")}
                                            </p>
                                            <a
                                                className="text-warning"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                {t("Learn more")}
                                            </a>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
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

            <Marketing />

            <ContactUs />
        </main>
        <CardsFooter />
    </div>;
}


class Landing extends React.Component {
    render() {
        return (
            <>
                <LandingFunction />
            </>
        );
    }
}

export default Landing;
