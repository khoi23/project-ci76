import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import product from "../assets/data/data";
import Helmet from "../components/Helmet/Helmet";
import ProductList from "../components/Product/ProductList";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import {
    selectCartItems,
    selectTotalAmount,
    setDecreaseItemQTY,
    setIncreaseItemQTY,
    setRemoveItemFromCart,
    setClearCartItems,
} from "../store/CartSlice";

import "../styles/cart.css";

import { motion } from "framer-motion";

const Cart = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);
    const totalAMount = useSelector(selectTotalAmount);
    const onClearToggle = () => {
        dispatch(setClearCartItems());
    };
    const [allProducts, setAllProducts] = useState(product);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Helmet title="Cart">
            <CommonSection title="Cart"></CommonSection>

            {cartItems.length === 0 ? (
                <section>
                    <Container>
                        <motion.div
                            className="bage_empty"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <i class="ri-shopping-bag-line"></i>
                            <h4>YOUR CART IS CURRENTLY EMPTY.</h4>
                            <Link to="/products" className="btn">
                                Return to shop
                            </Link>
                        </motion.div>
                    </Container>
                </section>
            ) : (
                <section>
                    <Container>
                        <motion.div
                            className="cart__process"
                            initial={{ y: -40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="cart__process-one">
                                <Link to="/cart">
                                    <i className="ri-checkbox-circle-line"></i>
                                    <div>
                                        <h4>Shopping bag</h4>
                                        <h6>View Your Items</h6>
                                    </div>
                                </Link>
                                <div className="cart__process-bar"></div>
                            </div>
                            <div className="cart__process-two">
                                <Link to="/checkout">
                                    <i className="ri-number-2"></i>
                                    <div>
                                        <h4>Shipping and Checkout</h4>
                                        <h6>Enter your details</h6>
                                    </div>
                                </Link>
                                <div className="cart__process-bar-next"></div>
                            </div>
                            <div className="cart__process-three">
                                {" "}
                                <Link to="/confirm">
                                    <i className="ri-number-3"></i>
                                    <div>
                                        <h4>Confirmation</h4>
                                        <h6>Review your order!</h6>
                                    </div>
                                </Link>
                                <div className="cart__process-bar-next"></div>
                            </div>
                        </motion.div>
                        <Row>
                            <Col lg="8">
                                <h6>You have {cartItems.length} items on cart</h6>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="cart__product">Product</th>
                                            <th className="cart__title"></th>
                                            <th className="cart__price">Price</th>
                                            <th className="cart__quantity">Qty</th>
                                            <th className="cart__subprice">SUBTOTAL</th>
                                            <th className="cart__delete">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <Tr item={item} key={item._id} />
                                        ))}
                                    </tbody>
                                </table>
                                <div className="cart__actions mt-4">
                                    <div className="cart__coupon">
                                        <h6>Have a promo code for checkout?</h6>
                                        <form action="">
                                            <input
                                                id="exampleEmail"
                                                name="coupon"
                                                placeholder="Coupon code"
                                                type="text"
                                            />

                                            <span>APPLY COUPON</span>
                                        </form>
                                    </div>
                                    <div className="cart__delete-cart">
                                        <div className="cart__delete-cart-btn" onClick={onClearToggle}>
                                            <i className="ri-delete-bin-line"></i>
                                            <span>Clear Cart</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className="cart_totals">
                                    <h3 className="cart_totals-title">CART TOTALS</h3>
                                    <div className="cart__total-box">
                                        <h6>SUBTOTAL</h6>
                                        <h5>${totalAMount}</h5>
                                    </div>

                                    <div className="cart__total-box">
                                        <h6>SHIPPING</h6>
                                        <h5>Free Shipping</h5>
                                    </div>

                                    <div className="cart__total-box">
                                        <h6>VOUCHER</h6>
                                        <h5>-$2</h5>
                                    </div>

                                    <div className="cart__total-box-end">
                                        <h6>TOTAL</h6>
                                        <h5>${+totalAMount - 2}</h5>
                                    </div>
                                </div>
                                <div className="cart__checkOut">
                                    <Link to={"/products"} className="btn btn__continue">
                                        Continue shopping
                                    </Link>
                                    <Link to={"/checkout"} className="btn">
                                        Check Out
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <h4 className="cart__interested">You may be interested in…</h4>
                            <ProductList data={allProducts} itemsPerPage={4} />
                        </Row>
                    </Container>
                </section>
            )}
        </Helmet>
    );
};

const Tr = (props) => {
    const { _id, image01, title, price, cartQuantity } = props.item;
    const dispatch = useDispatch();

    const onRemoveItem = () => {
        dispatch(
            setRemoveItemFromCart({
                _id,
                title,
                price,
                image01,
                cartQuantity,
            })
        );
    };

    const onIncreaseItem = () => {
        dispatch(
            setIncreaseItemQTY({
                _id,
                title,
                price,
                image01,
                cartQuantity,
            })
        );
    };
    const onDecreaseItem = () => {
        dispatch(
            setDecreaseItemQTY({
                _id,
                title,
                price,
                image01,
                cartQuantity,
            })
        );
    };
    return (
        <tr>
            <th className="cart__product">
                <div className="cart__product-img">
                    <img src={image01} alt="" />
                </div>
            </th>
            <th className="cart__title">
                <div className="cart__product-title">
                    {title} <span>(Size: M, Dough: PAN)</span>
                </div>
            </th>
            <th className="cart__price cart__price-tbody">
                ${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </th>
            <th className="cart__quantity">
                <div className="cart__quantity-box">
                    <i className="ri-subtract-line ri-xl" onClick={onDecreaseItem}></i>
                    <h5>{cartQuantity}</h5>
                    <i className="ri-add-line ri-xl" onClick={onIncreaseItem}></i>
                </div>
            </th>
            <th className="cart__subprice">
                $
                {(price * cartQuantity).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}
            </th>
            <th className="cart__delete">
                <i className="ri-delete-bin-line ri-xl" onClick={onRemoveItem}></i>
            </th>
        </tr>
    );
};

export default Cart;
