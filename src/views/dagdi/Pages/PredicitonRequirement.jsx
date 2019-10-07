import React from "react";
import CardsFooter from "components/Footers/CardsFooter.jsx";
import DagdiNavbar from "components/Navbars/DagdiNavbar.jsx";
import ReactWizard from 'react-bootstrap-wizard';
import "react-bootstrap-wizard/dist/react-wizard.scss";

import {
  Col,
  Row,
  Container,
} from "reactstrap";

import PredictionCarousel from "views/dagdi/prediction/PredictionCarousel.jsx";
import TerrainDetails from "views/dagdi/prediction/TerrainDetails.jsx";
import Preferences from "views/dagdi/prediction/Preferences.jsx";
import MarketDetails from "views/dagdi/prediction/MarketDetails.jsx";

var steps = [
  // this step hasn't got a isValidated() function, so it will be considered to be true
  { stepName: "Start", stepIcon: "icon-settings-gear-63", component: PredictionCarousel },

  { stepName: "Terrain Details", component: TerrainDetails },
  // this step will be validated to false
  { stepName: "User Preferences", component: Preferences },
  // this step will never be reachable because of the seconds isValidated() steps function that will always return false
  // tis is test
  { stepName: "Market Details", component: MarketDetails }
];

class PredictionRequirement extends React.Component { 
  constructor(props) {
    super(props)

    this.CorpProfile = this.CorpProfile.bind(this)
  }

  CorpProfile() {
    this.props.history.push('/prediction-result')
  }

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
                title="Please Provide Your Field Details"
                headerTextCenter
                validate
                color="green"
                finishButtonClick={this.CorpProfile}
                
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
