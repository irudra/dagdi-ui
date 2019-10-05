import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import {
    Button,
    Row,
    Col
} from "reactstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function LocationSearchFunction() {
  const { t } = useTranslation();
  return <div className="btn-wrapper">
  <div className="container">
      <div className="mb-3">
          <small className="display-4 text-light">{t("Enter your Farm location Details")}</small>
          <div className="form-group">
              <Row>
                  <Col lg={"9"}>
                      <div className="input-group">
                          <div className="input-group-prepend">
                                                          <span className="input-group-text">
                                                            <i className="ni ni-zoom-split-in"/>
                                                          </span>
                          </div>
                          <input className="form-control"
                                 placeholder="Search" type="text"/>
                      </div>
                  </Col>
                  <Col lg={"3"}>
                      <div className="input-group input-group-append">
                      <Button><Link 
                          to={'/prediction-requirement'}
                          > {t("Find your corps")}</Link></Button>
                         
                      </div>
                  </Col>
              </Row>
          </div>
      </div>
  </div>

</div>
}
class LocationSearch extends React.Component {
    state = {};

    componentDidMount() {

    }

    render() {
        return (
            <>
                <LocationSearchFunction/>
            </>
        );
    }
}

export default LocationSearch;
