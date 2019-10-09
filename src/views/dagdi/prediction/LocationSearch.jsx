import React from "react";
// reactstrap components
import {Button, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
// nodejs library that concatenates classes

export default function LocationSearch(value) {
    console.info(value);
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
                          to={value.to}
                          > {t("Find your crops")}</Link></Button>
                      </div>
                  </Col>
              </Row>
          </div>
      </div>
  </div>

</div>
}
