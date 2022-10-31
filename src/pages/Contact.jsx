import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";

const Contact = () => {
    return (
        <Helmet title="Contact">
            <CommonSection title="Contact"></CommonSection>
            <section>
                <Container>
                    <Row>
                        <Col lg="8">
                            <h3>We would love to hear from you.</h3>
                            <h6>
                                If you’ve got great products your making or looking to work with us then drop us a line.
                            </h6>
                            <Row>
                                {" "}
                                <Col lg="6" className="mt-3">
                                    <div className="checkout__input-container">
                                        <input
                                            id="fname"
                                            className="checkout__input-input"
                                            type="text"
                                            pattern=".+"
                                            required
                                        />
                                        <label className="checkout__input-label" htmlFor="fname">
                                            Frist Name
                                        </label>
                                    </div>
                                </Col>
                                <Col lg="6" className="mt-3">
                                    <div className="checkout__input-container">
                                        <input
                                            id="lname"
                                            className="checkout__input-input"
                                            type="text"
                                            pattern=".+"
                                            required
                                        />
                                        <label className="checkout__input-label" htmlFor="lname">
                                            Last Name
                                        </label>
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <textarea className="checkout__textarea" rows={6} placeholder="Message" />
                                </Col>
                                <div className="checkout__confirm">
                                    <Link to={"/confirm"} className="btn">
                                        Submit Now
                                    </Link>
                                </div>
                            </Row>
                        </Col>
                        <Col lg="4" className="d-flex flex-column gap-4">
                            <div>
                                <h5>Address</h5>
                                <span>12 Tran Duy Hung, Ha Noi, Viet Nam, See our store</span>
                            </div>
                            <div>
                                <h5>Infomation</h5>
                                <div className="d-flex flex-column gap-3">
                                    <span className="ps-0 border-0 link__social">
                                        <i class="ri-mail-line ri-xl"></i>email@gmail.com
                                    </span>
                                    <span className="ps-0 border-0 link__social">
                                        <i class="ri-phone-line ri-xl"></i>+84 324 432 534
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h5>Social Media</h5>
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
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Contact;
