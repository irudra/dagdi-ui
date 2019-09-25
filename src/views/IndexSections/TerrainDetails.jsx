import React, { Component } from "react";
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class TerrainDetails extends Component {


  render() {
    return (
      <container>
        
        <h1 className="h4 text-success text-left font-weight-bold mb-4">Land Scape</h1>
        <RadioGroup onChange={this.onChange} horizontal>
          <RadioButton value="Plain">
            Plain
      </RadioButton>
          <RadioButton value="Hilly">
            Hilly
      </RadioButton>
          <RadioButton value="Valley">
            Valley
      </RadioButton>
        </RadioGroup>

        <h1 className="h4 text-success text-left font-weight-bold mb-4">Water</h1>
        <RadioGroup onChange={this.onChange} horizontal>
          <RadioButton value="Rare">
            Rare
      </RadioButton>
          <RadioButton value="Average">
            Average
      </RadioButton>
          <RadioButton value="High">
            High
      </RadioButton>
        </RadioGroup>

        <h1 className="h4 text-success text-left font-weight-bold mb-4">Rain</h1>
        <RadioGroup onChange={this.onChange} horizontal>
          <RadioButton value="Less">
            Less
      </RadioButton>
          <RadioButton value="Normal">
            Normal
      </RadioButton>
          <RadioButton value="Heavy">
            Heavy
      </RadioButton>
        </RadioGroup>
      </container>
    );
  }
}

export default TerrainDetails;