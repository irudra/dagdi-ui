import React from "react";

import {Container,Row,Col,Button} from 'reactstrap';

class OurTeam extends React.Component{
    render(){
        return(
            <section className="section section-lg">
            <Container>
                <Row className="justify-content-center text-center mb-lg">
                    <Col lg="8">
                        <h2 className="display-3">The amazing Team</h2>
                        <p className="lead text-muted">
                            According to the National Oceanic and Atmospheric
                            Administration, Ted, Scambos, NSIDClead scentist, puts the
                            potentially record maximum.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-5 mb-lg-0" lg="3" md="6">
                        <div className="px-4">
                            <img
                                alt="..."
                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                src={require("assets/img/theme/team-1-800x800.jpg")}
                                style={{width: "200px"}}
                            />
                            <div className="pt-4 text-center">
                                <h5 className="title">
                                    <span className="d-block mb-1">Ryan Tompson</span>
                                    <small className="h6 text-muted">Web Developer</small>
                                </h5>
                                <div className="mt-3">
                                    <Button
                                        className="btn-icon-only rounded-circle"
                                        color="warning"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-twitter"/>
                                    </Button>
                                    <Button
                                        className="btn-icon-only rounded-circle ml-1"
                                        color="warning"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-facebook"/>
                                    </Button>
                                    <Button
                                        className="btn-icon-only rounded-circle ml-1"
                                        color="warning"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-dribbble"/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="mb-5 mb-lg-0" lg="3" md="6">
                        <div className="px-4">
                            <img
                                alt="..."
                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                src={require("assets/img/theme/team-2-800x800.jpg")}
                                style={{width: "200px"}}
                            />
                            <div className="pt-4 text-center">
                                <h5 className="title">
                                    <span className="d-block mb-1">Romina Hadid</span>
                                    <small className="h6 text-muted">
                                        Marketing Strategist
                                    </small>
                                </h5>
                                <div className="mt-3">
                                    <Button
                                        className="btn-icon-only rounded-circle"
                                        color="primary"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-twitter"/>
                                    </Button>
                                    <Button
                                        className="btn-icon-only rounded-circle ml-1"
                                        color="primary"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-facebook"/>
                                    </Button>
                                    <Button
                                        className="btn-icon-only rounded-circle ml-1"
                                        color="primary"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-dribbble"/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="mb-5 mb-lg-0" lg="3" md="6">
                        <div className="px-4">
                            <img
                                alt="..."
                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                src={require("assets/img/theme/team-3-800x800.jpg")}
                                style={{width: "200px"}}
                            />
                            <div className="pt-4 text-center">
                                <h5 className="title">
                                    <span className="d-block mb-1">Alexander Smith</span>
                                    <small className="h6 text-muted">UI/UX Designer</small>
                                </h5>
                                <div className="mt-3">
                                    <Button
                                        className="btn-icon-only rounded-circle"
                                        color="info"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-twitter"/>
                                    </Button>
                                    <Button
                                        className="btn-icon-only rounded-circle ml-1"
                                        color="info"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-facebook"/>
                                    </Button>
                                    <Button
                                        className="btn-icon-only rounded-circle ml-1"
                                        color="info"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-dribbble"/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="mb-5 mb-lg-0" lg="3" md="6">
                        <div className="px-4">
                            <img
                                alt="..."
                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                src={require("assets/img/theme/team-4-800x800.jpg")}
                                style={{width: "200px"}}
                            />
                            <div className="pt-4 text-center">
                                <h5 className="title">
                                    <span className="d-block mb-1">John Doe</span>
                                    <small className="h6 text-muted">Founder and CEO</small>
                                </h5>
                                <div className="mt-3">
                                    <Button
                                        className="btn-icon-only rounded-circle"
                                        color="success"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-twitter"/>
                                    </Button>
                                    <Button
                                        className="btn-icon-only rounded-circle ml-1"
                                        color="success"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-facebook"/>
                                    </Button>
                                    <Button
                                        className="btn-icon-only rounded-circle ml-1"
                                        color="success"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-dribbble"/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        );
    }
}

export default OurTeam;