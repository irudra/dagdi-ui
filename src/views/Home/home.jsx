/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import DagdiNavbar from "components/Navbars/DagdiNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Hero from "../IndexSections/Hero.jsx";
import Buttons from "../IndexSections/Buttons.jsx";
import Inputs from "../IndexSections/Inputs.jsx";
import CustomControls from "../IndexSections/CustomControls.jsx";
import Menus from "../IndexSections/Menus.jsx";
import Navbars from "../IndexSections/Navbars.jsx";
import Tabs from "../IndexSections/Tabs.jsx";
import Progress from "../IndexSections/Progress.jsx";
import Pagination from "../IndexSections/Pagination.jsx";
import Pills from "../IndexSections/Pills.jsx";
import Labels from "../IndexSections/Labels.jsx";
import Alerts from "../IndexSections/Alerts.jsx";
import Typography from "../IndexSections/Typography.jsx";
import Modals from "../IndexSections/Modals.jsx";
import Datepicker from "../IndexSections/Datepicker.jsx";
import TooltipPopover from "../IndexSections/TooltipPopover.jsx";
import Carousel from "../IndexSections/Carousel.jsx";
import Icons from "../IndexSections/Icons.jsx";
import Login from "../IndexSections/Login.jsx";
import Download from "../IndexSections/Download.jsx";
import AwesomeFeatures from "views/dagdi/AwesomeFeatures.jsx";
import OurCustomers from "views/dagdi/OurCustomers.jsx";
import OurTeam from "views/dagdi/OurTeam.jsx";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DagdiNavbar />
        <main ref="main">
         
          <Hero />
          <AwesomeFeatures/>
          <Carousel />
          <OurCustomers />
          <OurTeam />
          <Login />
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;