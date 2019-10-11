import React from "react";
// reactstrap components
import { Button, Col, Container, Row, UncontrolledCarousel } from "reactstrap";
import {useTranslation} from "react-i18next";
import LocationSearch from "./LocationSearch";



const items = [
    {
        src: require("assets/img/theme/agricultural-machine-1918989_1280.jpg"),
        altText: "",
        caption: "",
        header: ""
    },
    {
        src: require("assets/img/theme/img-2-1200x1000.jpg"),
        altText: "",
        caption: "",
        header: ""
    },
    {
        src: require("assets/img/theme/morning-2477957_1280.jpg"),
        altText: "",
        caption: "",
        header: ""
    }
];
function PredictionCarouselFunction() {
    const {t} = useTranslation();
    return <section className="section ">
    <Row className="justify-content-start align-items-start">
        <Col className="mb-lg-0" lg="4">
            <Container>
            <div className="rounded shadow overflow-hidden ">
                <UncontrolledCarousel items={items} />
                </div>
            </Container>
        </Col>
        <Col className="mb-5 mb-lg-0" lg="8">
            <Container>
            <h3 className="text-dark font-weight-light">
                {t("Why we matter")}
</h3>
            <p className=" text-Bls mt-2">
            {t("Why we matter description")}  
</p>
            <Button
                className="btn-white mt-4"
                color="default"
                href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
            >
                {t("Find more details about it")}
</Button>
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
}

class PredictionCarousel extends React.Component {
    render() {
        const value = {
            to:'/prediction-result'
        };
        return (
            <>
            <LocationSearch {...value}/>
              <PredictionCarouselFunction/>  
            </>
        );
    }

}
export default PredictionCarousel;
