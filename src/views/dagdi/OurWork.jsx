import React from "react";

import {Container, Row, Col, Card, CardImg} from 'reactstrap';

class OurWork extends React.Component {
    render() {
        return (
            <section className="section bg-secondary">
                <Container>
                    <Row className="row-grid align-items-center">
                        <Col md="6">
                            <Card className="bg-default shadow border-0">
                                <CardImg
                                    alt="..."
                                    src={require("assets/img/theme/img-1-1200x1000.jpg")}
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
                                        Dagdi&reg; Prediction system
                                    </h4>
                                    <p className="lead text-italic text-white">
                                        An Intelligent system to solve day to day life problems of rural area.
                                    </p>
                                </blockquote>
                            </Card>
                        </Col>
                        <Col md="6">
                            <div className="pl-md-5">
                                <div
                                    className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                                    <i className="ni ni-settings"/>
                                </div>
                                <h3>How we work</h3>
                                <p className="lead">
                                    Dagdi® uses state of the art algorithms to predict the corps to maximize the
                                    chances of capital return from the field.
                                </p>
                                <p>
                                    We use scientific knowledge of soil in the field, different types of corps and the
                                    yield based on corp type, past market analysis in prices of different corps
                                    and production effort, terrain types and various other factor to predict a suitable corps for the
                                    field.
                                    We use variety of data, which enables us to predict, which provides better return for the farmer.
                                </p>
                                <p>
                                    This will result in better distribution of corps in the market and overall balanced market
                                    for the producer and consumer of the farming goods.
                                </p>
                                <a
                                    className="font-weight-bold text-warning mt-5"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    Find out detailed report about how we can produce a better result.
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default OurWork;
