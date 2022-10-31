import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Tooltip } from "reactstrap";

import "./product.css";
import { useDispatch } from "react-redux";
import { setAddItemToCart } from "../../store/CartSlice";
import { motion } from "framer-motion";
import { setAddItemToWishList } from "../../store/WishListSlice";

const ProductCard = ({
    item: {
        _id,
        title,
        priceLong,
        price,
        rating,
        numOfReviews,
        image01,
        image02,
        image03,
        category,
        stock,
        description,
    },
}) => {
    const dispatch = useDispatch();
    const [cartQuantity, setCartQuantity] = useState(1);
    const navigate = useNavigate();

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

    const onAddToWishList = () => {
        const item = {
            _id,
            title,
            price,
            image01,
        };
        dispatch(setAddItemToWishList(item));
    };    const onView = () => {
        navigate(`/products/${_id}`);
    };

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    const [tooltipOpenView, setTooltipOpenView] = useState(false);
    const toggleView = () => setTooltipOpenView(!tooltipOpenView);

    const [tooltipOpenWish, setTooltipOpenWish] = useState(false);
    const toggleWish = () => setTooltipOpenWish(!tooltipOpenWish);
    return (
        <Col lg="3" md="4" className="mb-5 mt-3">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="product__item"
            >
                <div className="product__img">
                    <span className="product__item-category">{category}</span>
                    <img src={image01} alt="" />

                    <div className="product__button-group">
                        <span className="product__icon product__icon-add" onClick={onAddToCart}>
                            <Tooltip isOpen={tooltipOpen} target="ToolAddToCart" toggle={toggle}>
                                Add To Cart
                            </Tooltip>
                            <i className="ri-add-line ri-xl" id="ToolAddToCart"></i>
                        </span>
                        <span className="product__icon product__icon-view" onClick={onView}>
                            <Tooltip isOpen={tooltipOpenView} target="ToolView" toggle={toggleView}>
                                View
                            </Tooltip>
                            <i className="ri-eye-line ri-xl" id="ToolView"></i>
                        </span>
                        <span className="product__icon product__icon-wishlist" onClick={onAddToWishList}>
                            <Tooltip isOpen={tooltipOpenWish} target="ToolAddToWishList" toggle={toggleWish}>
                                Add To Wishlist
                            </Tooltip>
                            <i className="ri-heart-line ri-xl" id="ToolAddToWishList"></i>
                        </span>
                    </div>
                </div>
                <div className="product__content">
                    <Link className="product__title" to={`/products/${_id}`}>
                        {title}
                    </Link>
                    <div className="product__price">
                        {priceLong && <del>${priceLong} USD</del>}
                        <span>
                            ${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                    </div>

                    <div className="product__rating">
                        <div className="product__rating-star">
                            <span>
                                {rating > 0.6 ? (
                                    <i className="ri-star-s-fill"></i>
                                ) : (
                                    <i className="ri-star-half-s-fill"></i>
                                )}
                            </span>
                            <span>
                                {rating > 1.6 ? (
                                    <i className="ri-star-s-fill"></i>
                                ) : (
                                    <i className="ri-star-half-s-fill"></i>
                                )}
                            </span>
                            <span>
                                {rating > 2.6 ? (
                                    <i className="ri-star-s-fill"></i>
                                ) : (
                                    <i className="ri-star-half-s-fill"></i>
                                )}
                            </span>
                            <span>
                                {rating > 3.6 ? (
                                    <i className="ri-star-s-fill"></i>
                                ) : (
                                    <i className="ri-star-half-s-fill"></i>
                                )}
                            </span>
                            <span>
                                {rating > 4.6 ? (
                                    <i className="ri-star-s-fill"></i>
                                ) : (
                                    <i className="ri-star-half-s-fill"></i>
                                )}
                            </span>
                        </div>
                        {rating === 0 ? "" : <p className="product__rating-text">({numOfReviews} reviewer)</p>}
                    </div>
                </div>
            </motion.div>
        </Col>
    );
};

export default ProductCard;
