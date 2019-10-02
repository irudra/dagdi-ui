import React, { useState, Component } from "react";
import { InputGroup } from 'reactstrap';
import { useTranslation } from "react-i18next";

function PredictionFunction() {

  const state = {
    cSelected: []
  };

 const onRadioBtnClick = (rSelected) => {
    this.setState({ rSelected });
  };

  const { t } = useTranslation();


  return <container>
  <h1 className="h4 text-success text-left font-weight-bold mb-4">{t("Land Scape")}</h1>
          
          <InputGroup onChange={onRadioBtnClick} horizontal>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Land-Scape" class="custom-control-input" id="Plain" type="radio" />
              <label class="custom-control-label" for="Plain">{t("Plain")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Land-Scape" class="custom-control-input" id="Hilly" type="radio" />
              <label class="custom-control-label" for="Hilly">{t("Hilly")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Land-Scape" class="custom-control-input" id="Valley" type="radio" />
              <label class="custom-control-label" for="Valley">{t("Valley")}</label>
            </div>
          </InputGroup>
  
          <h1 className="h4 text-success text-left font-weight-bold mb-4">{t("Rain")}</h1>
          <InputGroup onChange={onRadioBtnClick} horizontal>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Rain" class="custom-control-input" id="Less" type="radio" />
              <label class="custom-control-label" for="Less">{t("Less")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Rain" class="custom-control-input" id="Normal" type="radio" />
              <label class="custom-control-label" for="Normal">{t("Normal")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Rain" class="custom-control-input" id="Heavy" type="radio" />
              <label class="custom-control-label" for="Heavy">{t("Heavy")}</label>
            </div>
          </InputGroup>
          
          <h1 className="h4 text-success text-left font-weight-bold mb-4">{t("water")}</h1>
          <InputGroup onChange={onRadioBtnClick} horizontal>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Water" class="custom-control-input" id="Rare" type="radio" />
              <label class="custom-control-label" for="Rare">{t("Rare")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Water" class="custom-control-input" id="Average" type="radio" />
              <label class="custom-control-label" for="Average">{t("Average")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Water" class="custom-control-input" id="High" type="radio" />
              <label class="custom-control-label" for="High">{t("High")}</label>
            </div>
          </InputGroup>
  
        </container>
}

class TerrainDetails extends Component {
 

  render() {
    return (
      <PredictionFunction/>
    );
  }
}

export default TerrainDetails;