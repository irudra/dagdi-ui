import React, { Component } from "react";
import { InputGroup } from 'reactstrap';
import { useTranslation } from "react-i18next";

function PreferencesFunction() {

  const state = {
    cSelected: []
  };

 const onRadioBtnClick = (rSelected) => {
    this.setState({ rSelected });
  };

  const { t } = useTranslation();
  return  <container>



  <h1 className="h4 text-success text-left font-weight-bold mb-4">{t("Investment")} </h1>   
          <InputGroup onChange={onRadioBtnClick} horizontal>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Investment " class="custom-control-input" id="investment.minimum" type="radio" />
              <label class="custom-control-label" for="investment.minimum">{t("Minimum")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Investment " class="custom-control-input" id="investment.medium" type="radio" />
              <label class="custom-control-label" for="investment.medium">{t("Medium")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Investment " class="custom-control-input" id="investment.maximum" type="radio" />
              <label class="custom-control-label" for="investment.maximum">{t("Maximum")}</label>
            </div>
          </InputGroup>
  
          <h1 className="h4 text-success text-left font-weight-bold mb-4">{t("Labour")}</h1>
          <InputGroup onChange={onRadioBtnClick} horizontal>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Labour" class="custom-control-input" id="labour.minimum" type="radio" />
              <label class="custom-control-label" for="labour.minimum">{t("Minimum")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Labour" class="custom-control-input" id="labour.medium" type="radio" />
              <label class="custom-control-label" for="labour.medium">{t("Medium")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Labour" class="custom-control-input" id="labour.maximum" type="radio" />
              <label class="custom-control-label" for="labour.maximum">{t("Maximum")}</label>
            </div>
          </InputGroup>
          
          <h1 className="h4 text-success text-left font-weight-bold mb-4">{t("Equipment")}</h1>
          <InputGroup onChange={onRadioBtnClick} horizontal>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Equipment" class="custom-control-input" id="equipment.minimum" type="radio" />
              <label class="custom-control-label" for="equipment.minimum">{t("Minimum")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Equipment" class="custom-control-input" id="equipment.medium" type="radio" />
              <label class="custom-control-label" for="equipment.medium">{t("Medium")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Equipment" class="custom-control-input" id="equipment.maximum" type="radio" />
              <label class="custom-control-label" for="equipment.maximum">{t("Maximum")}</label>
            </div>
          </InputGroup>
  
        </container>
}



class Preferences extends Component {
 

  render() {
    return (
     <PreferencesFunction/> 
    );
  }
}

export default Preferences;