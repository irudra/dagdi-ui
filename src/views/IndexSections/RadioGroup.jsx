import React, { Component } from "react";
import { InputGroup } from 'reactstrap';

class TerrainDetails extends Component {
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



<h1 className="h4 text-success text-left font-weight-bold mb-4">Land Scape</h1>
        
        <InputGroup onChange={this.onChange} horizontal>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-1">
            <input name="Land-Scape" class="custom-control-input" id="Plain" type="radio" />
            <label class="custom-control-label" for="Plain">Plain</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-1">
            <input name="Land-Scape" class="custom-control-input" id="Hilly" type="radio" />
            <label class="custom-control-label" for="Hilly">Hilly</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-1">
            <input name="Land-Scape" class="custom-control-input" id="Valley" type="radio" />
            <label class="custom-control-label" for="Valley">Valley</label>
          </div>
        </InputGroup>

        <h1 className="h4 text-success text-left font-weight-bold mb-4">Rain</h1>
        <InputGroup onChange={this.onChange} horizontal>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-1">
            <input name="Rain" class="custom-control-input" id="Less" type="radio" />
            <label class="custom-control-label" for="Less">Less</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-1">
            <input name="Rain" class="custom-control-input" id="Normal" type="radio" />
            <label class="custom-control-label" for="Normal">Normal</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-1">
            <input name="Rain" class="custom-control-input" id="Heavy" type="radio" />
            <label class="custom-control-label" for="Heavy">Heavy</label>
          </div>
        </InputGroup>
        
        <h1 className="h4 text-success text-left font-weight-bold mb-4">Water</h1>
        <InputGroup onChange={this.onChange} horizontal>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-1">
            <input name="Water" class="custom-control-input" id="Rare" type="radio" />
            <label class="custom-control-label" for="Rare">Rare</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-1">
            <input name="Water" class="custom-control-input" id="Average" type="radio" />
            <label class="custom-control-label" for="Average">Average</label>
          </div>
          <div class="custom-control mr-lg custom-radio mb-3 col-lg-1">
            <input name="Water" class="custom-control-input" id="High" type="radio" />
            <label class="custom-control-label" for="High">High</label>
          </div>
        </InputGroup>

      </container>
    );
  }
}

export default TerrainDetails;