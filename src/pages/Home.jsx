import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import HeroSlider from "../components/UI/HeroSlider/HeroSlider";
import SectionTitle from "../components/UI/SectionTitle/SectionTitle";

import ProductList from "../components/Product/ProductList";

import "../styles/home.css";

import categoryImg01 from "../assets/images/1.webp";
import categoryImg02 from "../assets/images/2.webp";
import categoryImg03 from "../assets/images/3.webp";
import categoryImg04 from "../assets/images/4.webp";
import Banner from "../components/UI/Banner/Banner";
import IgSlider from "../components/UI/IgSlider/IgSlider";
import ClockSection from "../components/UI/ClockSection/ClockSection";
import product from "../assets/data/data";

import { motion } from "framer-motion";

const categoryData = [
    {
        title: "FREE SHIPPING",
        imgUrl: categoryImg01,
        subTitle: "For all order over $99 free",
    },
    {
        title: "DELIVERY ON TIME",
        imgUrl: categoryImg02,
        subTitle: "Break the lines wherever",
    },

    {
        title: "SECURE PAMENT",
        imgUrl: categoryImg03,
        subTitle: "100% secure payment",
    },

    {
        title: "SHIP & RETURN",
        imgUrl: categoryImg04,
        subTitle: "Photography online website",
    },
];

const Home = () => {
    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(product);
    const [productFilter, setProductFilter] = useState(product);

    useEffect(() => {
        if (category === "ALL") {
            setProductFilter(product);
        }

        if (category === "BURGER") {
            const filteredProducts = product.filter((item) => item.category === "Burger");

            setProductFilter(filteredProducts);
        }

        if (category === "PIZZA") {
            const filteredProducts = product.filter((item) => item.category === "Pizza");

            setProductFilter(filteredProducts);
        }

        if (category === "BREAD") {
            const filteredProducts = product.filter((item) => item.category === "Bread");

            setProductFilter(filteredProducts);
        }
    }, [category]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Helmet title="Home">
            <HeroSlider />
            <section>
                <SectionTitle title="What we services" sub="Just sit back at home" />
                <Container className="mt-5">
                    <Row>
                        {categoryData.map((item, index) => (
                            <Col xl="3" md="6" sm="6" xs="12" className="mb-1" key={index}>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 1 }}
                                    whileHover={{ y: -20 }}
                                    className="category__item gap-2"
                                >
                                    <div className="category__img">
                                        <img src={item.imgUrl} alt="category__item" />
                                    </div>
                                    <div className="category__text">
                                        <h4>{item.title}</h4>
                                        <h6>{item.subTitle}</h6>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <Banner />{" "}
            <section>
                <SectionTitle title="Best Seller" />

                <Container>
                    <Row>
                        <ProductList data={allProducts} itemsPerPage={4} />
                    </Row>
                </Container>
            </section>
            <section>
                <ClockSection />
            </section>
            <section>
                <SectionTitle title="POPULAR DISHES" />

                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="mt-3 d-flex align-items-center justify-content-center gap-4 popular__group-filter">
                                <button
                                    className={`btn-outline  ${category === "ALL" ? "foodBtnActive" : ""} `}
                                    onClick={() => setCategory("ALL")}
                                >
                                    All
                                </button>
                                <button
                                    className={`btn-outline ${category === "BURGER" ? "foodBtnActive" : ""} `}
                                    onClick={() => setCategory("BURGER")}
                                >
                                    Burger
                                </button>

                                <button
                                    className={`btn-outline ${category === "PIZZA" ? "foodBtnActive" : ""} `}
                                    onClick={() => setCategory("PIZZA")}
                                >
                                    Pizza
                                </button>

                                <button
                                    className={`btn-outline ${category === "BREAD" ? "foodBtnActive" : ""} `}
                                    onClick={() => setCategory("BREAD")}
                                >
                                    Bread
                                </button>
                            </div>
                        </Col>
                        <ProductList data={productFilter} itemsPerPage={8} />
                    </Row>
                </Container>
            </section>
            <section>
                <SectionTitle title="Instagram Store " sub="#food_delivery" />
                <IgSlider />
            </section>
        </Helmet>
    );
};

export default Home;
