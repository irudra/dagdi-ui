
import { Container, FormGroup, Col, Row, Card, InputGroup, Input, Button, CardBody, InputGroupAddon, InputGroupText } from 'reactstrap';
import classnames from 'classnames';
import { useTranslation } from "react-i18next";
import React, { useState } from 'react'


function ContactFunction() {

    const initialUserState = {
        state: {},
        loading: true,
    }

    const [state, setState] = useState(initialUserState)
    const { t } = useTranslation();
    return <section className="section section-lg pt-lg-0 section-contact-us">
        <Container>
            <Row className="justify-content-center mt--300">
                <Col lg="8">
                    <Card className="bg-gradient-secondary shadow">
                        <CardBody className="p-lg-5">
                            <h4 className="mb-1">{t("Contact Us")}</h4>
                            <p className="mt-0">
                                {t("Contact Us descriiption")}
                            </p>
                            <FormGroup
                                className={classnames("mt-5", {
                                    focused: state.nameFocused
                                })}
                            >
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-user-run" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder={t("Your name")}
                                        type="text"
                                        onFocus={e => setState({ nameFocused: true })}
                                        onBlur={e => setState({ nameFocused: false })}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup
                                className={classnames({
                                    focused: state.emailFocused
                                })}
                            >
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder={t("Email")}
                                        type="email"
                                        onFocus={e => this.setState({ emailFocused: true })}
                                        onBlur={e => this.setState({ emailFocused: false })}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup className="mb-4">
                                <Input
                                    className="form-control-alternative"
                                    cols="80"
                                    name="name"
                                    placeholder={t("message")}
                                    rows="4"
                                    type="textarea"
                                />
                            </FormGroup>
                            <div>
                                <Button
                                    block
                                    className="btn-round"
                                    color="default"
                                    size="lg"
                                    type="button"
                                >
                                    {t("send message")}
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>

}

class ContactUs extends React.Component {

    render() {
        return (
            <ContactFunction />
        );
    }
}
export default ContactUs;