import React from "react";
import DagdiNavbar from "components/Navbars/DagdiNavbar.jsx";
import CropsPageCarousel from "views/IndexSections/CropsPageCarousel";
import { Row, Col } from "reactstrap";
import CardsFooter from "components/Footers/CardsFooter";
import CropProfile from "views/IndexSections/CropProfile.jsx";

class CropsPage extends React.Component {
    
    render() {
        return (
            <>
                <container fluid style={{ marginTop: "15px" }}>
                    <DagdiNavbar />
                    <CropProfile/>
                    <CropsPageCarousel />
                    <Row className="justify-content-start align-items-center ml-xl">
                        <Col className="mb-5 mb-lg-0 mr-xl" lg="9">
                        </Col>
                    </Row>
                </container>

                <CardsFooter/>
            </>
        );
    }
}
export default CropsPage;
