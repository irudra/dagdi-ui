import React from "react";
import {Row,Col,Container} from 'reactstrap';

class Marketing extends React.Component{
    render(){
        return(
            <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
                <Row className="text-center justify-content-center">
                    <Col lg="10">
                        <h2 className="display-3 text-white">Build something</h2>
                        <p className="lead text-white">
                            According to the National Oceanic and Atmospheric
                            Administration, Ted, Scambos, NSIDClead scentist, puts the
                            potentially record low maximum sea ice extent tihs year down
                            to low ice.
                        </p>
                    </Col>
                </Row>
                <Row className="row-grid mt-5">
                    <Col lg="4">
                        <div
                            className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                            <i className="ni ni-settings text-primary"/>
                        </div>
                        <h5 className="text-white mt-3">Building tools</h5>
                        <p className="text-white mt-3">
                            Some quick example text to build on the card title and make
                            up the bulk of the card's content.
                        </p>
                    </Col>
                    <Col lg="4">
                        <div
                            className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                            <i className="ni ni-ruler-pencil text-primary"/>
                        </div>
                        <h5 className="text-white mt-3">Grow your market</h5>
                        <p className="text-white mt-3">
                            Some quick example text to build on the card title and make
                            up the bulk of the card's content.
                        </p>
                    </Col>
                    <Col lg="4">
                        <div
                            className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                            <i className="ni ni-atom text-primary"/>
                        </div>
                        <h5 className="text-white mt-3">Launch time</h5>
                        <p className="text-white mt-3">
                            Some quick example text to build on the card title and make
                            up the bulk of the card's content.
                        </p>
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
        );
    }
}

export default Marketing;