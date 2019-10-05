import React from "react";
// reactstrap components
import { Col, Container, Row, UncontrolledCarousel, Card, CardBody} from "reactstrap";

const items = [
    {
        src: require("assets/img/theme/tomoto.jpg"),
        altText: "",
        caption: "",
        header: ""
    },
    {
        src: require("assets/img/theme/tomato.jpg"),
        altText: "",
        caption: "",
        header: ""
    }
];

class CropsPageCarousel extends React.Component {
    
    render() {
        return (
            <>

                <section className="section bg-gradient-orange">
                <h1 className="text-center mb-sm display-3 text-white">Health Benefits</h1>
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
                                                        Name
                                                    </h5>
                                                    <p>
                                                        The Arctic Ocean freezes every winter and much of
                                                        the sea-ice then thaws every summer, and that
                                                        process will continue whatever.
                                                    </p>
                                                    
                                                </div>
                                            </div>

                                            <div className="d-flex px-3">
                                                
                                                <div className="pl-4">
                                                    <h5 className="title text-success">
                                                        Ideal field
                                                    </h5>
                                                    <p>
                                                        The Arctic Ocean freezes every winter and much of
                                                        the sea-ice then thaws every summer, and that
                                                        process will continue whatever.
                                                    </p>
                                                    
                                                </div>
                                            </div>
                                            <div className="d-flex px-3">
                                                
                                                <div className="pl-4">
                                                    <h5 className="title text-success">
                                                       Element requirement
                                                    </h5>
                                                    <p>
                                                        The Arctic Ocean freezes every winter and much of
                                                        the sea-ice then thaws every summer, and that
                                                        process will continue whatever.
                                                    </p>
                                                   
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
                <section className="section">
                <h1 className="text-center mb-sm display-3">Current Market Analysis</h1>
                <Card >
                                        <CardBody>
                                            <div className="d-flex px-3">
                                                
                                                <div className="pl-4">
                                                    <h5 className="title text-success">
                                                        Name
                                                    </h5>
                                                    <p>
                                                        The Arctic Ocean freezes every winter and much of
                                                        the sea-ice then thaws every summer, and that
                                                        process will continue whatever.
                                                    </p>
                                                    
                                                </div>
                                            </div>

                                            <div className="d-flex px-3">
                                                
                                                <div className="pl-4">
                                                    <h5 className="title text-success">
                                                        Ideal field
                                                    </h5>
                                                    <p>
                                                        The Arctic Ocean freezes every winter and much of
                                                        the sea-ice then thaws every summer, and that
                                                        process will continue whatever.
                                                    </p>
                                                    
                                                </div>
                                            </div>
                                            
                                        </CardBody>
                                    </Card>


                </section>
            </>
        );
    }
}
export default CropsPageCarousel;
