import React from "react";
import {Col, Button, Row, Container, Card} from "reactstrap";
import CardsFooter from "components/Footers/CardsFooter.jsx";
import DagdiNavbar from "components/Navbars/DagdiNavbar.jsx";
import {Link} from "react-router-dom";

class CropProfile extends React.Component {
    state = {
        crops: []
    }
    componentDidMount() {
        fetch('https://boiling-ocean-40232.herokuapp.com/crop/getCropByUid/'+this.props.match.params.id)
            .then(res => res.json())
            .then((data) => {
                this.setState({ crops: data })
            })
            .catch(console.log)
    }

    render() {
        const crop = this.state.crops;
        return (
            <>
                <DagdiNavbar/>
                <main className="profile-page" ref="main">
                    <section className="section section-shaped ">
                        <div className="shape shape-style-1 shape-primary">
                        </div>
                    </section>
                    <section className="section">
                        <Container className="mt-5">
                            <Card className="card-profile shadow">
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
                                                    size="sm"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    Buy
                                                </Button>
                                                <Button
                                                    className="mr-4"
                                                    color="info"
                                                    href="#pablo"
                                                    size="sm"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    Sell
                                                </Button>
                                                <Link
                                                    to={"/prediction-requirement"}><Button
                                                    className="float-right"
                                                    color="default"
                                                    href="#pablo"
                                                    size="sm"
                                                >
                                                    Search again
                                                </Button></Link>
                                            </div>
                                        </Col>
                                        <Col className="order-lg-1" lg="4">

                                            <div className="card-profile-stats d-flex justify-content-center">
                                                <div>
                                                    <span className="heading">{crop.currentPrice}</span>
                                                    <span className="description">Current Price </span>
                                                </div>
                                                <div>
                                                    <span className="heading">{crop.varieties}</span>
                                                    <span className="description">Varieties </span>
                                                </div>


                                                <div>
                                                    <span className="heading">{crop.annualProduction}</span>
                                                    <span className="description">Annual Production</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>


                                    <div className="text-center">
                                        <Row>
                                            <div className="col-lg-6">
                                                <h3>
                                                    {crop.cropName}

                                                </h3>
                                                <div className="h6 font-weight-300">
                                                    <i className="ni location_pin mr-2"/>

                                                </div>
                                            </div>
                                        </Row>

                                    </div>
                                    <div className="mt-2 py-5 border-top text-center">
                                        <Row className="justify-content-center">
                                            <Col lg="9">
                                                <p>
                                                    {crop.cropDescription}
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
                    <CardsFooter/>
                </main>
            </>

        );
    }
}

export default CropProfile;
