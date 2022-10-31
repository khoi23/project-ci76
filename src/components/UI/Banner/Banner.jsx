import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import "./banner.css";

import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="banner__section">
            <Container>
                <Row>
                    <Col lg="6" md="12" className="mt-3">
                        <motion.div
                            initial={{ x: -160, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2 }}
                            className="banner__box"
                        >
                            <div className="banner__content">
                                <h3>Other Flavors</h3>
                                <h6>One phone call away</h6>
                                <Link className="btn banner-btn">Shop Now</Link>
                            </div>
                            <div className="banner__img-1"></div>
                        </motion.div>
                    </Col>
                    <Col lg="6" md="12" className="mt-3">
                        <motion.div
                            initial={{ x: 160, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2 }}
                            className="banner__box"
                        >
                            <div className="banner__content">
                                <h3>Delicious Foods</h3>
                                <h6>One phone call away</h6>
                                <Link className="btn banner-btn">Shop Now</Link>
                            </div>
                            <div className="banner__img-2"></div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;
