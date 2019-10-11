// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import i18n from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// reactstrap components
import { Col, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink, Row, UncontrolledCollapse, UncontrolledTooltip } from "reactstrap";

function DagdiNavbarFunction() {
  const changeLanguage = (e, lang) => {
    e.preventDefault()
    i18n.changeLanguage(lang);
  };

  const { t } = useTranslation();

  return <header className="header-global">
    <Navbar
      className="navbar-main navbar-transparent navbar-light headroom"
      expand="lg"
      id="navbar-main"
    >
      <Container>
        <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
          <img
            alt="..."
            src={require("assets/img/brand/dagdi_logo.png")}
          />
        </NavbarBrand>
        <button className="navbar-toggler" id="navbar_global">
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar_global">
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <Link to="/">
                  <img
                    alt="..."
                    src={require("assets/img/brand/dagdi_logo.png")}
                  />
                </Link>
              </Col>
              <Col className="collapse-close" xs="6">
                <button className="navbar-toggler" id="navbar_global">
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>


          <Nav className="align-items-lg-center ml-lg-auto" navbar>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                href="https://github.com/appBuddyin"
                id="tooltip333589074"
                target="_blank"
              >
                <i className="fa fa-facebook-square" />
                <span className="nav-link-inner--text d-lg-none ml-2">
                  Facebook
                    </span>
              </NavLink>
              <UncontrolledTooltip delay={0} target="tooltip333589074">
                Like us on Facebook
                  </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                href="https://github.com/appBuddyin"
                id="tooltip356693867"
                target="_blank"
              >
                <i className="fa fa-instagram" />
                <span className="nav-link-inner--text d-lg-none ml-2">
                  Instagram
                    </span>
              </NavLink>
              <UncontrolledTooltip delay={0} target="tooltip356693867">
                Follow us on Instagram
                  </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                href="https://github.com/appBuddyin"
                id="tooltip184698705"
                target="_blank"
              >
                <i className="fa fa-twitter-square" />
                <span className="nav-link-inner--text d-lg-none ml-2">
                  Twitter
                    </span>
              </NavLink>
              <UncontrolledTooltip delay={0} target="tooltip184698705">
                Follow us on Twitter
                  </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                href="https://github.com/appBuddyin"
                id="tooltip112445449"
                target="_blank"
              >
                <i className="fa fa-github" />
                <span className="nav-link-inner--text d-lg-none ml-2">
                  Github
                    </span>
              </NavLink>
              <UncontrolledTooltip delay={0} target="tooltip112445449">
                Star us on Github
                  </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                id="tooltip184698751"
                target="_blank"
                onClick={e => changeLanguage(e, "en")}
              >English</NavLink>
              <UncontrolledTooltip delay={0} target="tooltip184698751">
                Change your language to English
                  </UncontrolledTooltip>

            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-icon"

                id="tooltip112445450"
                target="_blank"
                onClick={e => changeLanguage(e, "hin")}
              >हिंदी
                  </NavLink>
              <UncontrolledTooltip delay={0} target="tooltip112445450">
                अपनी भाषा को हिंदी में बदलें
                  </UncontrolledTooltip>
            </NavItem>
            <NavItem className="d-none d-lg-block ml-lg-4">
              <Link to={"login-page"} className="nav-link no-caret" data-toggle="dropdown" role="button">
                <i className="ni ni-ui-04 d-lg-none"></i>
                <span className="nav-link-inner--text">{t("login")}</span>
              </Link>
            </NavItem>
          </Nav>
        </UncontrolledCollapse>
      </Container>
    </Navbar>
  </header>

}

class DagdiNavbar extends React.Component {

  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  render() {
    
    return (
      <DagdiNavbarFunction />
    );
  }
}

export default DagdiNavbar;
