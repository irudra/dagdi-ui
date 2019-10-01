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

// core components
import DagdiNavbar from "components/Navbars/DagdiNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Hero from "./Hero.jsx";

import Download from "../IndexSections/Download.jsx";
import OurMission from "../dagdi/OurMission.jsx";
import OurWork from "../dagdi/OurWork.jsx";
import OurTeam from "../dagdi/OurTeam.jsx";
import Marketing from "../dagdi/Marketing.jsx";
import ContactUs from "../dagdi/ContactUs.jsx";
import CorpsCarousel from "../dagdi/CorpsCarousel";

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
          <OurMission/>
          <CorpsCarousel />
          <OurWork />
          <OurTeam />
          <Marketing />
          <ContactUs />
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
