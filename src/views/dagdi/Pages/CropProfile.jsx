import React from "react";
import { Col, Button, Row, Container, Card } from "reactstrap";
import myData from './cropsMap.json';
class CropProfile extends React.Component {

    
    render() {
        const crop = myData[this.props.match.params.id];
        return (
            <>

                <main className="profile-page" ref="main">
                    <section className="section section-shaped ">
                        <div className="shape shape-style-1 shape-primary">
                            <span />
                            <span />
                            <span />
                        </div>
                    </section>
                    <section className="section">
                        <Container>
                            <Card className="card-profile shadow mt-sm">
                                <div className="px-4">
                                    <Row className="justify-content-center">
                                        <Col className="order-lg-2" lg="3">
                                            <div className="card-profile-image">
                                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                                    <img
                                                        alt="..."
                                                        className="rounded-circle"
                                                        src={crop.image}
                                                    />
                                                </a>
                                            </div>
                                        </Col>
                                        <Col
                                            className="order-lg-3 text-lg-right align-self-lg-center"
                                            lg="4"
                                        >
                                            <div className="card-profile-actions py-4 mt-lg-0">
                                                <Button
                                                    className="mr-4"
                                                    color="info"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                    size="sm"
                                                >
                                                    Connect
                        </Button>
                                                <Button
                                                    className="float-right"
                                                    color="default"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                    size="sm"
                                                >
                                                    Message
                        </Button>
                                            </div>
                                        </Col>
                                        <Col className="order-lg-1" lg="4">

                                            <div className="card-profile-stats d-flex justify-content-center">
                                                <div>
                                                    <span className="heading">{crop.current_price}</span>
                                                    <span className="description">Current Price </span>
                                                </div>
                                                <div>
                                                    <span className="heading">{crop.varieties}</span>
                                                    <span className="description">Varieties </span>
                                                </div>



                                                <div>
                                                    <span className="heading">{crop.annual_production}</span>
                                                    <span className="description">Annual Production</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <h3>
                                            {crop.user_name}
                                            
                                        </h3>
                                        <div className="h6 font-weight-300">
                                            <i className="ni location_pin mr-2" />
                                            {crop.user_location}
                                        </div>
                                        <div className="h6 mt-4">
                                            <i className="ni business_briefcase-24 mr-2" />
                                            {crop.user_profession}
                                        </div>
                                        <div>
                                            <i className="ni education_hat mr-2" />
                                            {crop.user_education}
                                        </div>
                                    </div>
                                    <div className="mt-5 py-5 border-top text-center">
                                        <Row className="justify-content-center">
                                            <Col lg="9">
                                                <p>
                                                    {crop.user_description}
                                                </p>
                                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                                    Show more
                        </a>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card>
                        </Container>
                    </section>
                </main>
            </>

        );
    }
}

export default CropProfile;
