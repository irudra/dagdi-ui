import React from "react";
import {Container,Row,Col,Button} from 'reactstrap';
import { useTranslation } from "react-i18next";

function OurTeamFunction() {
  const { t } = useTranslation();
  return <section className="section section-lg">
    <Container>
        <Row className="justify-content-center text-center mb-lg">
            <Col lg="8">
                <h2 className="display-3">{t("Our Team")}</h2>
                <p className="lead text-muted">
                   {t("Our Team description")}
                </p>
            </Col>
        </Row>
        <Row>
            <Col className="mb-5 mb-lg-0" lg="6" md="6">
                <div className="px-6">
                    <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                        style={{width: "200px", height: "200px"}}
                    />
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1">{t("Harish Singh Parihar")}</span>
                            <small className="h6 text-muted">Technical Consultant</small>
                        </h5>
                        <div className="mt-3">
                            <Button
                                className="btn-icon-only rounded-circle"
                                color="info"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                <i className="fa fa-twitter"/>
                            </Button>
                            <Button
                                className="btn-icon-only rounded-circle ml-1"
                                color="info"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                <i className="fa fa-facebook"/>
                            </Button>
                            <Button
                                className="btn-icon-only rounded-circle ml-1"
                                color="info"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                <i className="fa fa-dribbble"/>
                            </Button>
                        </div>
                    </div>
                </div>
            </Col>
            <Col className="mb-5 mb-lg-0" lg="6" md="6">
                <div className="px-6">
                    <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/hemant.png")}
                        style={{width: "200px", height: "200px"}}
                    />
                    <div className="pt-4 text-center">
                        <h5 className="title">
                            <span className="d-block mb-1">{t("Hemant Gaur")}</span>
                            <small className="h6 text-muted">Founder / Senior Developer</small>
                        </h5>
                        <div className="mt-3">
                            <Button
                                className="btn-icon-only rounded-circle"
                                color="success"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                <i className="fa fa-twitter"/>
                            </Button>
                            <Button
                                className="btn-icon-only rounded-circle ml-1"
                                color="success"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                <i className="fa fa-facebook"/>
                            </Button>
                            <Button
                                className="btn-icon-only rounded-circle ml-1"
                                color="success"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                <i className="fa fa-dribbble"/>
                            </Button>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</section>

}

class OurTeam extends React.Component{
    render(){
       return(
<OurTeamFunction/>
       );
    }
}

export default OurTeam;
