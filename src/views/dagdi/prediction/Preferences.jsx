import React, { Component } from "react";
import { InputGroup } from 'reactstrap';

class Preferences extends Component {
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



<h1 className="h4 text-success text-left font-weight-bold mb-4">Investment </h1>   
        <InputGroup onChange={this.onChange} horizontal>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Investment " class="custom-control-input" id="investment.minimum" type="radio" />
            <label class="custom-control-label" for="investment.minimum">Minimum</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Investment " class="custom-control-input" id="investment.medium" type="radio" />
            <label class="custom-control-label" for="investment.medium">Medium</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Investment " class="custom-control-input" id="investment.maximum" type="radio" />
            <label class="custom-control-label" for="investment.maximum">Maximum</label>
          </div>
        </InputGroup>

        <h1 className="h4 text-success text-left font-weight-bold mb-4">Labour</h1>
        <InputGroup onChange={this.onChange} horizontal>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Labour" class="custom-control-input" id="labour.minimum" type="radio" />
            <label class="custom-control-label" for="labour.minimum">Minimum</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Labour" class="custom-control-input" id="labour.medium" type="radio" />
            <label class="custom-control-label" for="labour.medium">Medium</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Labour" class="custom-control-input" id="labour.maximum" type="radio" />
            <label class="custom-control-label" for="labour.maximum">Maximum</label>
          </div>
        </InputGroup>
        
        <h1 className="h4 text-success text-left font-weight-bold mb-4">Equipment</h1>
        <InputGroup onChange={this.onChange} horizontal>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Equipment" class="custom-control-input" id="equipment.minimum" type="radio" />
            <label class="custom-control-label" for="equipment.minimum">Minimum</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Equipment" class="custom-control-input" id="equipment.medium" type="radio" />
            <label class="custom-control-label" for="equipment.medium">Medium</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
            <input name="Equipment" class="custom-control-input" id="equipment.maximum" type="radio" />
            <label class="custom-control-label" for="equipment.maximum">Maximum</label>
          </div>
        </InputGroup>

      </container>
    );
  }
}

export default Preferences;