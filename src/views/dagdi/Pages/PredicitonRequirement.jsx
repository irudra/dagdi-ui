import React from "react";
import CardsFooter from "components/Footers/CardsFooter.jsx";
import DagdiNavbar from "components/Navbars/DagdiNavbar.jsx";
import ReactWizard from 'react-bootstrap-wizard';
import "react-bootstrap-wizard/dist/react-wizard.scss"

import {
  Col,
  Row,
  Container,
} from "reactstrap";
import Marketing from "views/dagdi/Marketing.jsx";
import PredictionCarousel from "views/IndexSections/PredictionCarousel.jsx";


var steps = [
  // this step hasn't got a isValidated() function, so it will be considered to be true
  { stepName: "Start", component: PredictionCarousel },

  { stepName: "First", component: Marketing },
  // this step will be validated to false
  { stepName: "Second", component: Marketing },
  // this step will never be reachable because of the seconds isValidated() steps function that will always return false
  // tis is test
  { stepName: "Third", component: Marketing },

  { stepName: "Finish", component: Marketing }
];

class PredictionRequirement extends React.Component {
  render() {
    return (
      <>
        <DagdiNavbar />
        <section className="section section-shaped ">
          <div className="shape shape-style-1 shape-primary">
            <span />
            <span />
            <span />
          </div>
        </section>

        <Container fluid style={{ marginTop: "15px" }}>
          <Row>
            <Col xs={12} md={9} className="mr-auto ml-auto">

              <ReactWizard
                steps={steps}
                navSteps
                title="react-wizard"
                headerTextCenter
                validate
                color="green"
                finishButtonClick={this.finishButtonClick}
              />

            </Col>
          </Row>
        </Container>
        <CardsFooter />
      </>
    );
  }
}

export default PredictionRequirement;