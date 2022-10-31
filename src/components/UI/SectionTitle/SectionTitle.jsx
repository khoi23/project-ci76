import React from "react";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";

const SectionTitle = (props) => {
    const { title, sub } = props;
    return (
        <>
            <Container>
                <Row>
                    <Col className="text-center">
                        <motion.h2
                            initial={{ y: -40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="section__title-title mb-3"
                        >
                            {title}
                        </motion.h2>
                        {sub ? (
                            <motion.h5
                                initial={{ y: -40, scale: 0, opacity: 0 }}
                                whileInView={{ y: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="section__title-subtitle"
                            >
                                - {sub} -
                            </motion.h5>
                        ) : (
                            ""
                        )}
                        {/* <h5 className="section__title-subtitle">- {sub} -</h5> */}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SectionTitle;
