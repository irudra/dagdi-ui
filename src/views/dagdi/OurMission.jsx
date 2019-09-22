import React from 'react';


import { Container, Row, Col, Badge } from "reactstrap";

class OurMission extends React.Component {
    render() {
        return (
            <>
                <section className="section section-lg">
                    <Container>
                        <Row className="row-grid align-items-center">
                            <Col className="order-md-2" md="6">
                                <img
                                    alt="..."
                                    className="img-fluid floating"
                                    src={require("assets/img/theme/promo-1.png")}
                                />
                            </Col>
                            <Col className="order-md-1" md="6">
                                <div className="pr-md-5">
                                    <div
                                        className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                        <i className="ni ni-settings-gear-65" />
                                    </div>
                                    <h3>Our Mission</h3>
                                    <p>
                                        We want to transform the way we currently doing farming. The farmers are not provided with
                                        enough options while picking up any corp for their field. They generally use traditional corps and
                                        inefficient way. We are trying to provide farmers a better option by predicting
                                        a corp based on multiple factor. So they can maximize their return from their labour or field.
                                    </p>
                                    <ul className="list-unstyled mt-5">
                                        <li className="py-2">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <Badge
                                                        className="badge-circle mr-3"
                                                        color="success"
                                                    >
                                                        <i className="ni ni-settings-gear-65" />
                                                    </Badge>
                                                </div>
                                                <div>
                                                    <h6 className="mb-0">
                                                        More option to the farmers while picking any corp
                                                    </h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <Badge
                                                        className="badge-circle mr-3"
                                                        color="success"
                                                    >
                                                        <i className="ni ni-html5" />
                                                    </Badge>
                                                </div>
                                                <div>
                                                    <h6 className="mb-0">Better return for farmers</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <Badge
                                                        className="badge-circle mr-3"
                                                        color="success"
                                                    >
                                                        <i className="ni ni-satisfied" />
                                                    </Badge>
                                                </div>
                                                <div>
                                                    <h6 className="mb-0">
                                                        A happy Rural world
                                                    </h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default OurMission;
