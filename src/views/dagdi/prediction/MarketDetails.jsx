import React, { Component } from "react";
import { InputGroup } from 'reactstrap';

class MarketDetails extends Component {
  constructor(props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  render() {
    return (
      <container>



<h1 className="h4 text-success text-left font-weight-bold mb-4">Proximity Market</h1>
        
        <InputGroup onChange={this.onChange} horizontal>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Proximity Market" class="custom-control-input" id="market.easy" type="radio" />
            <label class="custom-control-label" for="market.easy">Within 10 km</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Proximity Market" class="custom-control-input" id="market.medium" type="radio" />
            <label class="custom-control-label" for="market.medium">Within 50 km</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Proximity Market" class="custom-control-input" id="market.hard" type="radio" />
            <label class="custom-control-label" for="market.hard">More than 50 km</label>
          </div>
        </InputGroup>

        <h1 className="h4 text-success text-left font-weight-bold mb-4">Road Transport</h1>
        <InputGroup onChange={this.onChange} horizontal>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Road Transport" class="custom-control-input" id="road.easy" type="radio" />
            <label class="custom-control-label" for="road.easy">Road within 10 km</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Road Transport" class="custom-control-input" id="road.medium" type="radio" />
            <label class="custom-control-label" for="road.medium">Road within 50 km</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Road Transport" class="custom-control-input" id="road.hard" type="radio" />
            <label class="custom-control-label" for="road.hard">More than 50 km</label>
          </div>
        </InputGroup>
        
        <h1 className="h4 text-success text-left font-weight-bold mb-4">Train Transport</h1>
        <InputGroup onChange={this.onChange} horizontal>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Train Transport" class="custom-control-input" id="train.easy" type="radio" />
            <label class="custom-control-label" for="train.easy">Train within 10 km</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Train Transport" class="custom-control-input" id="train.medium" type="radio" />
            <label class="custom-control-label" for="train.medium">Train within 50 km</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Train Transport" class="custom-control-input" id="train.hard" type="radio" />
            <label class="custom-control-label" for="train.hard">More than 50 km</label>
          </div>
        </InputGroup>

      </container>
    );
  }
}

export default MarketDetails;