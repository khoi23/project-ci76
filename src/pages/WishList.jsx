import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import { setAddItemToCart } from "../store/CartSlice";
import { selectWishListItems, setClearWishList, setRemoveItemFromWishList } from "../store/WishListSlice";

import { motion } from "framer-motion";

import "../styles/wishlist.css";

const WishList = () => {
    const dispatch = useDispatch();
    const wishListItems = useSelector(selectWishListItems);
    const onClearToggle = () => {
        dispatch(setClearWishList());
    };
    return (
        <Helmet title="Wish List">
            {" "}
            <CommonSection title="Wish List"></CommonSection>
            {wishListItems.length === 0 ? (
                <section>
                    <Container>
                        <motion.div
                            className="bage_empty"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <i class="ri-shopping-bag-line"></i>
                            <h4>YOUR WishList IS CURRENTLY EMPTY.</h4>
                            <Link to="/products" className="btn">
                                Return to shop
                            </Link>
                        </motion.div>
                    </Container>
                </section>
            ) : (
                <section>
                    <Container>
                        <Link className="btn mb-4">Return shop</Link>
                        <Row>
                            <Col lg="12">
                                <h6>You have {wishListItems.length} items on wishlist!</h6>
                                <div className="wishlist__container">
                                    <Row className="wishlist__header justify-content-center align-items-center text-center">
                                        <Col lg="2">
                                            <h6>Image</h6>
                                        </Col>
                                        <Col lg="4">
                                            <h6>Product</h6>
                                        </Col>
                                        <Col lg="2">
                                            <h6>Price</h6>
                                        </Col>
                                        <Col lg="2">
                                            <h6>Add</h6>
                                        </Col>
                                        <Col lg="2">
                                            <h6>Delete</h6>
                                        </Col>
                                    </Row>
                                    <Row className="wishlist__body">
                                        {wishListItems.map((item) => (
                                            <Tr item={item} key={item._id} />
                                        ))}
                                    </Row>
                                </div>

                                <div>
                                    <button className="btn" onClick={onClearToggle}>
                                        Clear Wishlist
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            )}
        </Helmet>
    );
};

const Tr = (props) => {
    const { _id, image01, title, price } = props.item;
    const [cartQuantity, setCartQuantity] = useState(1);
    const dispatch = useDispatch();

    const onAddToCart = () => {
        const item = {
            _id,
            title,
            price,
            image01,
            cartQuantity,
        };

        dispatch(setAddItemToCart(item));
    };

    const onRemoveItem = () => {
        dispatch(
            setRemoveItemFromWishList({
                _id,
                title,
                price,
                image01,
            })
        );
    };

    return (
        <Col lg="12" className="wishlist__item">
            <Row className="align-items-center text-center">
                <Col lg="2">
                    <div className="wishlist__img">
                        <img src={image01} alt="" />
                    </div>
                </Col>
                <Col lg="4">
                    <h6 className="wishlist__item-title">{title}</h6>
                </Col>
                <Col lg="2">
                    <h6 className="wishlist__item-price">${price}</h6>
                </Col>
                <Col lg="2">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="btn"
                        onClick={onAddToCart}
                    >
                        add to cart
                    </motion.button>
                </Col>
                <Col lg="2">
                    <motion.i
                        className="ri-delete-bin-line ri-xl"
                        whileHover={{ rotate: "180deg", scale: 1.5 }}
                        transition={{ duration: 0.5 }}
                        onClick={onRemoveItem}
                    ></motion.i>
                </Col>
            </Row>
        </Col>
    );
};

export default WishList;
