import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import ProductList from "../components/Product/ProductList";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import product from "../assets/data/data";
import "../styles/product.css";
const Products = () => {
    const [productData, setProductData] = useState(product);
    const [render, serRender] = useState(false);

    const handleFilter = (e) => {
        const filterValue = e.target.value.toLowerCase();

        if (filterValue === "all") {
            setProductData(product);
        } else {
            const filterdProduct = product.filter((item) => item.category.toLowerCase() === filterValue);
            setProductData(filterdProduct);
        }
    };

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        const searchedProducts = product.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

        setProductData(searchedProducts);
    };

    const sortProduct = (e) => {
        const sortTerm = e.target.value;
        if (sortTerm === "all") {
            const filterdProduct = product.sort((a, b) => a.price - b.price);
            setProductData(filterdProduct);
            serRender(!render);
        }
        if (sortTerm === "ascending") {
            const filterdProduct = productData.sort((a, b) => a.price - b.price);
            setProductData(filterdProduct);
            serRender(!render);
        }
        if (sortTerm === "descending") {
            const filterdProduct = productData.sort((a, b) => b.price - a.price);
            setProductData(filterdProduct);
            serRender(!render);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Helmet title="Product">
            <CommonSection title="Product"></CommonSection>

            <section>
                <Container>
                    <Row>
                        <Col lg="3" md="3">
                            <div className="filter__widget">
                                <select onChange={handleFilter}>
                                    <option value="all">Filter by category</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="burger">Burger</option>
                                    <option value="bread">Bread</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="3" md="3">
                            <div className="filter__widget">
                                <select onChange={sortProduct}>
                                    <option value="all">Sort By</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div className="search__box">
                                <input type="text" placeholder="Search......" onChange={handleSearch} />
                                <span>
                                    <i className="ri-search-line "></i>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pt-2">
                <Container>
                    <Row>
                        {productData.length === 0 ? (
                            <h1 className="text-center">No product are Found?</h1>
                        ) : (
                            <ProductList data={productData} itemsPerPage={8} />
                        )}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Products;
