import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import Prediction from 'views/dagdi/Pages/Prediction';

// reactstrap components
import {
    Button,
    Row,
    Col
} from "reactstrap";
import { Link } from "react-router-dom";
class LocationSearch extends React.Component {
    state = {};

    componentDidMount() {

    }

    render() {
        return (
            <>
                <div className="btn-wrapper">
                    <div className="container">
                        <div className="mb-3">
                            <small className="display-4 text-white">Enter your Farm location
                                Details</small>
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
                                            to={'/prediction-page'}
                                            >Find your corps</Link></Button>
                                           
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default LocationSearch;
