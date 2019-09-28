import React from "react";
// reactstrap components
import { Col, Container, Row, UncontrolledCarousel, Card, CardBody } from "reactstrap";

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

class CorpsPageCarousel extends React.Component {
    render() {
        return (
            <>
                <section className="section ml-xl mr-xl">
                
                        <Row className="justify-content-start align-items-start">
                            
                            <Col xs={12} md={4} className="mb-lg-0 ml-xl" lg="4">
                                <Container >
                                <div className="rounded shadow overflow-hidden ">
                                    <UncontrolledCarousel items={items} />
                                    </div>
                                </Container>
                            </Col>
                            <Col xs={12} md={4} className="mb-5 mb-lg-0 mr-xl" lg="5">
                                <Container>
                                <Card className="shadow shadow-lg--hover mt-0">
                                        <CardBody>
                                            <div className="d-flex px-3">
                                                
                                                <div className="pl-4">
                                                    <h5 className="title text-success">
                                                        Awesome Support
                                                    </h5>
                                                    <p>
                                                        The Arctic Ocean freezes every winter and much of
                                                        the sea-ice then thaws every summer, and that
                                                        process will continue whatever.
                                                    </p>
                                                    <a
                                                        className="text-success"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Learn more
                                                    </a>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>

                                    <Card className="shadow shadow-lg--hover mt-1">
                                        <CardBody>
                                            <div className="d-flex px-3">
                                                
                                                <div className="pl-4">
                                                    <h5 className="title text-success">
                                                        Awesome Support
                                                    </h5>
                                                    <p>
                                                        The Arctic Ocean freezes every winter and much of
                                                        the sea-ice then thaws every summer, and that
                                                        process will continue whatever.
                                                    </p>
                                                    <a
                                                        className="text-success"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Learn more
                                                    </a>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>

                                    <Card className="shadow shadow-lg--hover mt-1">
                                        <CardBody>
                                            <div className="d-flex px-3">
                                                
                                                <div className="pl-4">
                                                    <h5 className="title text-success">
                                                        Awesome Support
                                                    </h5>
                                                    <p>
                                                        The Arctic Ocean freezes every winter and much of
                                                        the sea-ice then thaws every summer, and that
                                                        process will continue whatever.
                                                    </p>
                                                    <a
                                                        className="text-success"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Learn more
                                                    </a>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
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
            </>
        );
    }

}
export default CorpsPageCarousel;