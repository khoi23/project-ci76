import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { motion } from "framer-motion";

import ForgotPW from "../assets/4498897.jpg";
const ForgotPassword = () => {
    return (
        <Helmet title={`Forgot Password`}>
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <motion.div
                                className="box__register"
                                initial={{ x: -80, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="box__register-img">
                                    <img src={ForgotPW} alt="" />
                                </div>
                                <div className="box__register-content">
                                    <h3>Don't have an account?</h3>
                                    <h6>Get Started By Creating Your New Account</h6>
                                    <Link className="regiter-outline-btn" to="/register">
                                        Register
                                    </Link>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center section__login">
                            <motion.div
                                initial={{ x: 80, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <h3 className="mb-3">Forgot your password</h3>
                                <h6 className="mb-3">
                                    Please enter the email address you'd <br /> like your password reset infomation sent
                                    to
                                </h6>
                                <form className="form mb-3 login__form">
                                    <div className="form__group">
                                        <input type="email" placeholder="Email" />
                                    </div>

                                    <button type="submit" className="login__btn btn">
                                        Request rest password
                                    </button>
                                </form>
                                <div className="login__forgot">
                                    <Link to={"/login"}>Return Login</Link>
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default ForgotPassword;
