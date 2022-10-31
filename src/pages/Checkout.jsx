import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";
import { selectCartItems, selectTotalAmount } from "../store/CartSlice";
import { motion } from "framer-motion";
import "../styles/checkout.css";
const Checkout = () => {
    const [payment, setPayment] = useState("checkpayments");

    const cartItems = useSelector(selectCartItems);
    const totalAMount = useSelector(selectTotalAmount);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Helmet title="check out">
            <CommonSection title="Check Out"></CommonSection>
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
                        <div className="cart__process-two ">
                            <Link to="/">
                                <i className="ri-checkbox-circle-line"></i>
                                <div>
                                    <h4>Shipping and Checkout</h4>
                                    <h6>Enter your details</h6>
                                </div>
                            </Link>
                            <div className="cart__process-bar"></div>
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
                            <form action="">
                                <h3>Billing details</h3>
                                <Row>
                                    <Col lg="12">
                                        <div className="d-flex gap-3">
                                            <div
                                                className={`${
                                                    payment === "checkpayments" ? "btn-cash-checked" : "btn-cash"
                                                } `}
                                                onClick={() => setPayment("checkpayments")}
                                            >
                                                Cash on delivery
                                            </div>
                                            <div
                                                className={`${payment === "paypal" ? "btn-cash-checked" : "btn-cash"} `}
                                                onClick={() => setPayment("paypal")}
                                            >
                                                Pay with card
                                            </div>
                                        </div>
                                    </Col>

                                    {payment === "paypal" && (
                                        <>
                                            <Col lg="12" className="mt-3">
                                                <motion.div
                                                    className="checkout__input-container"
                                                    initial={{ y: -40, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <input
                                                        id="Cnumber"
                                                        className="checkout__input-input"
                                                        type="text"
                                                        pattern=".+"
                                                        required
                                                    />
                                                    <label className="checkout__input-label" htmlFor="Cnumber">
                                                        Card Number
                                                    </label>
                                                </motion.div>
                                            </Col>
                                            <Col lg="6" className="mt-3">
                                                <motion.div
                                                    className="checkout__input-container"
                                                    initial={{ y: -40, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <input
                                                        id="Edate"
                                                        className="checkout__input-input checkout__input-date"
                                                        type="date"
                                                        pattern=".+"
                                                        required
                                                    />
                                                </motion.div>
                                            </Col>
                                            <Col lg="6" className="mt-3 mb-4">
                                                <motion.div
                                                    className="checkout__input-container"
                                                    initial={{ y: -40, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <input
                                                        id="CVV"
                                                        className="checkout__input-input"
                                                        type="text"
                                                        pattern=".+"
                                                        required
                                                    />
                                                    <label className="checkout__input-label" htmlFor="CVV">
                                                        CVV
                                                    </label>
                                                </motion.div>
                                            </Col>
                                        </>
                                    )}

                                    <h6 className="mt-3">Infomation</h6>
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
                                    <Col lg="12" className="mt-3">
                                        <div className="checkout__input-container">
                                            <input
                                                id="address"
                                                className="checkout__input-input"
                                                type="text"
                                                pattern=".+"
                                                required
                                            />
                                            <label className="checkout__input-label" htmlFor="address">
                                                Address
                                            </label>
                                        </div>
                                    </Col>
                                    <Col lg="12" className="mt-3">
                                        <div className="checkout__input-container">
                                            <select
                                                className="checkout__input-input"
                                                name="country"
                                                id="country"
                                                required
                                            >
                                                <option value="vietnam">Viet Nam</option>
                                                <option value="unitedstates">United States</option>
                                                <option value="unitedkingdom">United Kingdom</option>
                                                <option value="turkey">Turkey</option>
                                            </select>
                                            <label className="checkout__input-label" htmlFor="country">
                                                Country/region
                                            </label>
                                        </div>
                                    </Col>
                                    <Col lg="8" className="mt-3">
                                        <div className="checkout__input-container">
                                            <input
                                                id="phone"
                                                className="checkout__input-input"
                                                type="text"
                                                pattern=".+"
                                                required
                                            />
                                            <label className="checkout__input-label" htmlFor="phone">
                                                Phone
                                            </label>
                                        </div>
                                    </Col>
                                    <Col lg="4" className="mt-3">
                                        <div className="checkout__input-container">
                                            <input
                                                id="postcode"
                                                className="checkout__input-input"
                                                type="text"
                                                pattern=".+"
                                                required
                                            />
                                            <label className="checkout__input-label" htmlFor="postcode">
                                                Post Code
                                            </label>
                                        </div>
                                    </Col>
                                    <Col lg="12" className="mt-3">
                                        <div className="checkout__input-container">
                                            <input
                                                id="email"
                                                className="checkout__input-input"
                                                type="email"
                                                pattern=".+"
                                                required
                                            />
                                            <label className="checkout__input-label" htmlFor="email">
                                                Email
                                            </label>
                                        </div>
                                    </Col>
                                    <Col lg="12" className="mt-3">
                                        <div className="checkout__input-checked-container">
                                            <input
                                                className="checkout__input-checked"
                                                type="checkbox"
                                                id="checked"
                                                name="checkbox"
                                                value="saveInfo"
                                            />
                                            <label htmlFor="checked" className="checkout__checkbox-label">
                                                Save this information for next time
                                            </label>
                                        </div>
                                    </Col>
                                    <Col lg="12">
                                        <label htmlFor="checked" className="checkout__textarea-label">
                                            Order notes (optional)
                                        </label>
                                        <textarea
                                            className="checkout__textarea"
                                            rows={6}
                                            placeholder="Notes about your order, e.gg...."
                                        />
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                        <Col lg="4">
                            {" "}
                            <div className="cart_totals">
                                <h3 className="checkout__totals">CART TOTALS</h3>
                                <div className="checkout__totals-product">
                                    {cartItems.map((val, index) => (
                                        <div className="checkout__totals-product-box" key={index}>
                                            <h5>
                                                {val.title} <span>x{val.cartQuantity}</span>
                                            </h5>
                                            <h6>
                                                $
                                                {(val.price * val.cartQuantity).toLocaleString(undefined, {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2,
                                                })}
                                            </h6>
                                        </div>
                                    ))}
                                </div>
                                <div className="checkout__totals-box">
                                    <h6>SUBTOTAL:</h6>
                                    <h5>
                                        $
                                        {totalAMount.toLocaleString(undefined, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                    </h5>
                                </div>
                                <div className="checkout__totals-box">
                                    <h6>SHIPPING:</h6>
                                    <h5>Free</h5>
                                </div>
                                <div className="checkout__totals-box">
                                    <h6>VOUCHER:</h6>
                                    <h5>-$2</h5>
                                </div>
                                <div className="checkout__totals-box">
                                    <h6>VAT (20%):</h6>
                                    <h5>
                                        $
                                        {((totalAMount * 20) / 100).toLocaleString(undefined, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                    </h5>
                                </div>
                                <div className="checkout__totals-box-end">
                                    <h6>TOTAL:</h6>
                                    <h5>
                                        $
                                        {(totalAMount - 2 + (totalAMount * 20) / 100).toLocaleString(undefined, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                    </h5>
                                </div>
                            </div>
                            <div className="checkout__confirm">
                                <Link to={"/confirm"} className="btn">
                                    Check Out
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Checkout;
