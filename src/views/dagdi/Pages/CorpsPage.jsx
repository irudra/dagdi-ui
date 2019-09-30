import React from "react";
import DagdiNavbar from "components/Navbars/DagdiNavbar.jsx";
import CorpsPageCarousel from "views/IndexSections/CorpsPageCarousel";
import { Row, Col } from "reactstrap";
import CardsFooter from "components/Footers/CardsFooter";
import CorpProfile from "views/IndexSections/CorpProfile.jsx";

class CorpsPage extends React.Component {
    
    render() {
        return (
            <>
                <container fluid style={{ marginTop: "15px" }}>
                    <DagdiNavbar />
                    <CorpProfile/>
                    <CorpsPageCarousel />
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
export default CorpsPage;