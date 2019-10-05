import React from "react";
import { useTranslation } from "react-i18next";
import {Container, Row, Col, Card, CardImg} from 'reactstrap';

function OurWorkFunction() {
    const { t } = useTranslation();
    return <section className="section bg-secondary">
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
                            <h3>{t("How we work")}</h3>
                            <p className="lead">
                                {t("How we work heading")}
                            </p>
                            <p>
                               {t("How we work description1")}
                            </p>
                            <p>
                            {t("How we work description2")}
                            </p>
                            <a
                                className="font-weight-bold text-warning mt-5"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                {t("How we work more details")}
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
}

class OurWork extends React.Component {
    render() {
        return(
       <OurWorkFunction/>
        );
    }
}

export default OurWork;
