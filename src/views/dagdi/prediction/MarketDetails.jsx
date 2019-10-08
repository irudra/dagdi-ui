import React, { Component } from "react";
import { InputGroup } from 'reactstrap';
import { useTranslation } from "react-i18next";
import LocationSearch from "./LocationSearch";
function MarketDetailsFunction() {
 const onRadioBtnClick = (rSelected) => {
    this.setState({ rSelected });
  };

  const { t } = useTranslation();
  return <container>



  <h1 className="h4 text-success text-left font-weight-bold mb-4">{t("Proximity Market")}</h1>
          
          <InputGroup onChange={onRadioBtnClick} horizontal>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Proximity Market" class="custom-control-input" id="market.easy" type="radio" />
              <label class="custom-control-label" for="market.easy">{t("Within 10 km")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Proximity Market" class="custom-control-input" id="market.medium" type="radio" />
              <label class="custom-control-label" for="market.medium">{t("Within 50 km")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Proximity Market" class="custom-control-input" id="market.hard" type="radio" />
              <label class="custom-control-label" for="market.hard">{t("More than 50 km")}</label>
            </div>
          </InputGroup>
  
          <h1 className="h4 text-success text-left font-weight-bold mb-4">{t("Road Transport")}</h1>
          <InputGroup onChange={onRadioBtnClick} horizontal>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Road Transport" class="custom-control-input" id="road.easy" type="radio" />
              <label class="custom-control-label" for="road.easy">{t("Within 1 km")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Road Transport" class="custom-control-input" id="road.medium" type="radio" />
              <label class="custom-control-label" for="road.medium">{t("Within 10 km")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Road Transport" class="custom-control-input" id="road.hard" type="radio" />
              <label class="custom-control-label" for="road.hard">{t("More than 10 km")}</label>
            </div>
          </InputGroup>
          
          <h1 className="h4 text-success text-left font-weight-bold mb-4">{t("Train Transport")}</h1>
          <InputGroup onChange={onRadioBtnClick} horizontal>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Train Transport" class="custom-control-input" id="train.easy" type="radio" />
              <label class="custom-control-label" for="train.easy">{t("Within 10 km")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Train Transport" class="custom-control-input" id="train.medium" type="radio" />
              <label class="custom-control-label" for="train.medium">{t("Within 50 km")}</label>
            </div>
            <div class="custom-control mr-lg custom-radio mb-3 col-lg-2">
              <input name="Train Transport" class="custom-control-input" id="train.hard" type="radio" />
              <label class="custom-control-label" for="train.hard">{t("More than 50 km")}</label>
            </div>
          </InputGroup>
  
        </container>
}


class MarketDetails extends Component {
  

  render() {
    return (
      <>
      <LocationSearch/>
      <MarketDetailsFunction/>
      </>
    );
  }
}

export default MarketDetails;
