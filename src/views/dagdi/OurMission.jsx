import React from 'react';
import { useTranslation } from "react-i18next";

import { Container, Row, Col, Badge } from "reactstrap";

function MainSection() {
    const { t } = useTranslation();
    return  <section className="section section-lg">
    <Container>
        <Row className="row-grid align-items-center">
            <Col className="order-md-2" md="6">
                <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/farmer-158432_1280.png")}
                />
            </Col>
            <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                    <div
                        className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                        <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>{t("Our Mission")}</h3>
                    <p>
                      {t("OurMission.Description")}
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
                                        {t("More option to the farmers while picking any crop")}
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
                                    <h6 className="mb-0">{t("Better return for farmers")}</h6>
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
                                        {t("A happy Rural world")}
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
}

class OurMission extends React.Component {
    render() {
        return (
            <>
              <MainSection/> 
            </>
        );
    }
}

export default OurMission;
