import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Input, InputGroup, ListGroup, ListGroupItem, Row } from "reactstrap";

import "./footer.css";

import logo from "../../assets/logo.webp";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row className="mb-5">
                    <Col lg="3">
                        <Link to="/home" className="footer__logo">
                            <img src={logo} alt="" />
                        </Link>
                        <p className="footer__text mt-3">Sophisticated simplicity for the independent mind</p>
                        <div className="footer__social mt-4">
                            <Link>
                                <i className="ri-facebook-fill ri-xl"></i>
                            </Link>
                            <Link>
                                <i className="ri-twitter-fill ri-xl"></i>
                            </Link>
                            <Link>
                                <i className="ri-instagram-fill ri-xl"></i>
                            </Link>
                            <Link>
                                <i className="ri-kakao-talk-fill ri-xl"></i>
                            </Link>
                        </div>
                    </Col>
                    <Col lg="2">
                        {" "}
                        <div className="footer__quick-links">
                            <h4 className="quick-links-title">Quick Links</h4>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">About Us</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Privacy Policy</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Terms & Conditions</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Products Return</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Products Return</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="3">
                        {" "}
                        <div className="footer__quick-links">
                            <h4 className="quick-links-title">Contact Us</h4>
                            <ListGroup className="footer__quick-links-contact">
                                <ListGroupItem className="ps-0 border-0 link__social">
                                    <span>
                                        <i className="ri-map-pin-fill ri-xl"></i>
                                    </span>
                                    <p>12 Tran Duy Hung, Ha Noi, Viet Nam</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 link__social">
                                    <span>
                                        <i className="ri-phone-fill ri-xl"></i>
                                    </span>
                                    <p>+84 432 432 432</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 link__social">
                                    <span>
                                        <i className="ri-mail-fill ri-xl"></i>
                                    </span>
                                    <p>email@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="4">
                        <h4 className="quick-links-title">Our Newsletter</h4>
                        <h6>Join our list and get 15% off your first purchase! Don’t worry we don’t spam</h6>
                        <form action="">
                            <InputGroup>
                                <Input id="exampleEmail" name="email" placeholder="Your email address" type="email" />
                                <Button color="success">
                                    <i className="ri-send-plane-fill ri-xl"></i>
                                </Button>
                            </InputGroup>
                        </form>
                    </Col>
                </Row>

                <Row>
                    <hr />
                    <Col lg="6">
                        <p className="footer__copyright mt-3">
                            Copy right {year} developer by <u>Coder</u> | Powered by Shopify.
                        </p>
                    </Col>
                    <Col lg="6">
                        <div className="footer__payment mt-3">
                            <i className="ri-visa-fill ri-xl"></i>
                            <i className="ri-paypal-fill ri-xl"></i>
                            <i className="ri-mastercard-fill ri-xl"></i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
