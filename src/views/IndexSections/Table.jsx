import React from "react";
// reactstrap components
import { Card, CardHeader, Container, Row } from "reactstrap";


class Table extends React.Component {
    render() {
        return (
            <>
                <section>
                    {/* Dark table */}
                    <Container>
                        <Row>
                            <div className="col">
                                <Card className="bg-default shadow">
                                    <CardHeader className="bg-transparent border-0">
                                        <h3 className="text-white mb-0">Card tables</h3>
                                    </CardHeader>
                                    <Table
                                        className="align-items-center table-dark table-flush"
                                        responsive
                                    >
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">Project</th>
                                                <th scope="col">Budget</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Users</th>
                                                <th scope="col">Completion</th>
                                                <th scope="col" />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <Media className="align-items-center">
                                                        <a
                                                            className="avatar rounded-circle mr-3"
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                src={require("assets/img/theme/bootstrap.jpg")}
                                                            />
                                                        </a>
                                                        <Media>
                                                            <span className="mb-0 text-sm">
                                                                Argon Design System
                          </span>
                                                        </Media>
                                                    </Media>
                                                </th>
                                                <td>$2,500 USD</td>
                                                <td>
                                                    <Badge color="" className="badge-dot mr-4">
                                                        <i className="bg-warning" />
                                                        pending
                      </Badge>
                                                </td>
                                                <td>
                                                    <div className="avatar-group">
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip731399078"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-1-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip731399078"
                                                        >
                                                            Ryan Tompson
                        </UncontrolledTooltip>
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip491083084"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-2-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip491083084"
                                                        >
                                                            Romina Hadid
                        </UncontrolledTooltip>
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip528540780"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-3-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip528540780"
                                                        >
                                                            Alexander Smith
                        </UncontrolledTooltip>
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip237898869"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-4-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip237898869"
                                                        >
                                                            Jessica Doe
                        </UncontrolledTooltip>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mr-2">60%</span>
                                                        <div>
                                                            <Progress
                                                                max="100"
                                                                value="60"
                                                                barClassName="bg-warning"
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle
                                                            className="btn-icon-only text-light"
                                                            href="#pablo"
                                                            role="button"
                                                            size="sm"
                                                            color=""
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <i className="fas fa-ellipsis-v" />
                                                        </DropdownToggle>
                                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                Action
                          </DropdownItem>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                Another action
                          </DropdownItem>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                Something else here
                          </DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <Media className="align-items-center">
                                                        <a
                                                            className="avatar rounded-circle mr-3"
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                src={require("assets/img/theme/angular.jpg")}
                                                            />
                                                        </a>
                                                        <Media>
                                                            <span className="mb-0 text-sm">
                                                                Angular Now UI Kit PRO
                          </span>
                                                        </Media>
                                                    </Media>
                                                </th>
                                                <td>$1,800 USD</td>
                                                <td>
                                                    <Badge color="" className="badge-dot">
                                                        <i className="bg-success" />
                                                        completed
                      </Badge>
                                                </td>
                                                <td>
                                                    <div className="avatar-group">
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip188614932"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-1-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip188614932"
                                                        >
                                                            Ryan Tompson
                        </UncontrolledTooltip>
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip66535734"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-2-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip66535734"
                                                        >
                                                            Romina Hadid
                        </UncontrolledTooltip>
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip427561578"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-3-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip427561578"
                                                        >
                                                            Alexander Smith
                        </UncontrolledTooltip>
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip904098289"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-4-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip904098289"
                                                        >
                                                            Jessica Doe
                        </UncontrolledTooltip>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mr-2">100%</span>
                                                        <div>
                                                            <Progress
                                                                max="100"
                                                                value="100"
                                                                barClassName="bg-success"
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle
                                                            className="btn-icon-only text-light"
                                                            href="#pablo"
                                                            role="button"
                                                            size="sm"
                                                            color=""
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <i className="fas fa-ellipsis-v" />
                                                        </DropdownToggle>
                                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                Action
                          </DropdownItem>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                Another action
                          </DropdownItem>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                Something else here
                          </DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <Media className="align-items-center">
                                                        <a
                                                            className="avatar rounded-circle mr-3"
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                src={require("assets/img/theme/sketch.jpg")}
                                                            />
                                                        </a>
                                                        <Media>
                                                            <span className="mb-0 text-sm">
                                                                Black Dashboard
                          </span>
                                                        </Media>
                                                    </Media>
                                                </th>
                                                <td>$3,150 USD</td>
                                                <td>
                                                    <Badge color="" className="badge-dot mr-4">
                                                        <i className="bg-danger" />
                                                        delayed
                      </Badge>
                                                </td>
                                                <td>
                                                    <div className="avatar-group">
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip707904950"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-1-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip707904950"
                                                        >
                                                            Ryan Tompson
                        </UncontrolledTooltip>
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip353988222"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-2-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip353988222"
                                                        >
                                                            Romina Hadid
                        </UncontrolledTooltip>
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip467171202"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-3-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip467171202"
                                                        >
                                                            Alexander Smith
                        </UncontrolledTooltip>
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip362118155"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-4-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip362118155"
                                                        >
                                                            Jessica Doe
                        </UncontrolledTooltip>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mr-2">72%</span>
                                                        <div>
                                                            <Progress
                                                                max="100"
                                                                value="72"
                                                                barClassName="bg-danger"
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle
                                                            className="btn-icon-only text-light"
                                                            href="#pablo"
                                                            role="button"
                                                            size="sm"
                                                            color=""
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <i className="fas fa-ellipsis-v" />
                                                        </DropdownToggle>
                                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                Action
                          </DropdownItem>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                Another action
                          </DropdownItem>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                Something else here
                          </DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <Media className="align-items-center">
                                                        <a
                                                            className="avatar rounded-circle mr-3"
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                src={require("assets/img/theme/react.jpg")}
                                                            />
                                                        </a>
                                                        <Media>
                                                            <span className="mb-0 text-sm">
                                                                React Material Dashboard
                          </span>
                                                        </Media>
                                                    </Media>
                                                </th>
                                                <td>$4,400 USD</td>
                                                <td>
                                                    <Badge color="" className="badge-dot">
                                                        <i className="bg-info" />
                                                        on schedule
                      </Badge>
                                                </td>
                                                <td>
                                                    <div className="avatar-group">
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip226319315"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-1-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip226319315"
                                                        >
                                                            Ryan Tompson
                        </UncontrolledTooltip>
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip711961370"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-2-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip711961370"
                                                        >
                                                            Romina Hadid
                        </UncontrolledTooltip>
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip216246707"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-3-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip216246707"
                                                        >
                                                            Alexander Smith
                        </UncontrolledTooltip>
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip638048561"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-4-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip638048561"
                                                        >
                                                            Jessica Doe
                        </UncontrolledTooltip>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mr-2">90%</span>
                                                        <div>
                                                            <Progress
                                                                max="100"
                                                                value="90"
                                                                barClassName="bg-info"
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle
                                                            className="btn-icon-only text-light"
                                                            href="#pablo"
                                                            role="button"
                                                            size="sm"
                                                            color=""
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <i className="fas fa-ellipsis-v" />
                                                        </DropdownToggle>
                                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                Action
                          </DropdownItem>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                Another action
                          </DropdownItem>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                Something else here
                          </DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <Media className="align-items-center">
                                                        <a
                                                            className="avatar rounded-circle mr-3"
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                src={require("assets/img/theme/vue.jpg")}
                                                            />
                                                        </a>
                                                        <Media>
                                                            <span className="mb-0 text-sm">
                                                                Vue Paper UI Kit PRO
                          </span>
                                                        </Media>
                                                    </Media>
                                                </th>
                                                <td>$2,200 USD</td>
                                                <td>
                                                    <Badge color="" className="badge-dot mr-4">
                                                        <i className="bg-success" />
                                                        completed
                      </Badge>
                                                </td>
                                                <td>
                                                    <div className="avatar-group">
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip781594051"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-1-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip781594051"
                                                        >
                                                            Ryan Tompson
                        </UncontrolledTooltip>
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip840372212"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-2-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip840372212"
                                                        >
                                                            Romina Hadid
                        </UncontrolledTooltip>
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip497647175"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-3-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip497647175"
                                                        >
                                                            Alexander Smith
                        </UncontrolledTooltip>
                                                        <a
                                                            className="avatar avatar-sm"
                                                            href="#pablo"
                                                            id="tooltip951447946"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-circle"
                                                                src={require("assets/img/theme/team-4-800x800.jpg")}
                                                            />
                                                        </a>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            target="tooltip951447946"
                                                        >
                                                            Jessica Doe
                        </UncontrolledTooltip>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mr-2">100%</span>
                                                        <div>
                                                            <Progress
                                                                max="100"
                                                                value="100"
                                                                barClassName="bg-danger"
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle
                                                            className="btn-icon-only text-light"
                                                            href="#pablo"
                                                            role="button"
                                                            size="sm"
                                                            color=""
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <i className="fas fa-ellipsis-v" />
                                                        </DropdownToggle>
                                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                Action
                          </DropdownItem>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                Another action
                          </DropdownItem>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                Something else here
                          </DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card>
                            </div>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default Table;