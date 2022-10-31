import React from "react";

import { Container } from "reactstrap";

import { Link } from "react-router-dom";

import "./heroslider.css";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../variants";
const HeroSlider = () => {
    return (
        <motion.div variants={staggerContainer(0.3, 1)} initial="hidden" whileInView={"show"} className="hero__section">
            <Container>
                <div className="hero__content">
                    <motion.h5 variants={fadeIn("down", "tween", 0.2, 1.1)} className="mb-3 hero__subtitle">
                        Easy way to make an order
                    </motion.h5>
                    <motion.h1 variants={fadeIn("down", "tween", 0.3, 1.1)} className="mb-4 hero__title">
                        <span>HUNGRY?</span> Just wait <br /> food at
                        <span> your door</span>
                    </motion.h1>
                    <motion.div variants={fadeIn("down", "tween", 0.4, 1.1)} whileHover={{ scale: 1.1 }}>
                        <Link to="/foods" className="hero-btn">
                            Shop Now
                        </Link>
                    </motion.div>

                    <motion.div variants={fadeIn("down", "tween", 0.5, 1.1)} className=" hero__service gap-4 mt-4">
                        <div className="hero__service-box gap-2">
                            <i className="ri-car-line ri-lg"></i>
                            Shipping charge
                        </div>

                        <div className="hero-br"></div>
                        <div className=" hero__service-box gap-2">
                            <i className="ri-shield-check-line ri-lg"></i>
                            100% secure checkout
                        </div>
                    </motion.div>
                </div>
            </Container>
        </motion.div>
    );
};

export default HeroSlider;
