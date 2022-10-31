import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
// import { GoogleMapProvider, useGoogleMap } from "@ubilabs/google-maps-react-hooks";

import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

import "../styles/ordersucces.css";
import { useSelector } from "react-redux";
import { selectCartItems, selectTotalAmount } from "../store/CartSlice";

import avtarImg from "../assets/shipper.jpg";
const center = { lat: 21.024119, lng: 105.812678 };
const center2 = { lat: 22.024119, lng: 106.812678 };

const OrderSucces = () => {
    const cartItems = useSelector(selectCartItems);
    const totalAMount = useSelector(selectTotalAmount);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        libraries: ["places"],
    });

    const [code, setCode] = useState();

    useEffect(() => {
        const digits = "0123456789";
        let OTPCODE = "";

        for (let i = 0; i < 8; i++) {
            OTPCODE += digits[Math.floor(Math.random() * 10)];
        }
        setCode(OTPCODE);
    }, []);

    if (!isLoaded) {
        return <div>Loaidng</div>;
    }
    return (
        <Helmet title="confirm">
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5">
                            <div className="confirm__icon">
                                <i className="ri-check-double-line"></i>
                            </div>
                            <div className="confirm__title">
                                <h3>THANK YOU FOR YOUR ORDER</h3>
                                <h6>Your order number: #{code}</h6>
                                <Link to="/shop" className="btn">
                                    Continue Shopping
                                </Link>
                            </div>
                        </Col>

                        <Col lg="6">
                            <div className="bills__container">
                                <div>
                                    <h2>Bills</h2>
                                </div>
                                <div className="bill__item">
                                    <h5>Order Id:</h5>
                                    <h6>#{code}</h6>
                                </div>
                                <div className="bill__item">
                                    <h5>Store:</h5>
                                    <div className="bill__item-store">
                                        <h6>Pizza Store 3</h6>
                                        <h6>Ngoc Khanh, Ba Dinh</h6>
                                        <h6>Viet Nam</h6>
                                    </div>
                                </div>
                                <div className="bill__item">
                                    <h5>Shipping address:</h5>
                                    <div className="bill__item-store">
                                        <h6>32/96 street</h6>
                                        <h6>Nguyen Chi Thanh, Ba Dinh</h6>
                                        <h6>Viet Nam</h6>
                                    </div>
                                </div>

                                <div className="bill__item">
                                    <h5>Product Order:</h5>
                                </div>
                                <div className="bill__products">
                                    {cartItems.map((val, item) => (
                                        <div className="bill__product-item">
                                            <h5>
                                                {val.title}
                                                <span>x{val.cartQuantity}</span>
                                            </h5>
                                            <h6>${val.price}</h6>
                                        </div>
                                    ))}
                                </div>
                                <div className="bill__item">
                                    <h5>Order Amount:</h5>
                                    <h3 className="bill__item-amount mb-3">${totalAMount}</h3>
                                </div>
                                <Link className="btn mb-3">Print Order</Link>
                            </div>
                            <div className="bill__shipper">
                                <div className="bill__shipper-left">
                                    <div className="bill__shipper-img">
                                        <img src={avtarImg} alt="" />
                                    </div>
                                    <div>
                                        <h5>Jone Doe</h5>
                                        <h6>+84 3214 3214</h6>
                                    </div>
                                </div>
                                <div className="bill__shipper-contact">
                                    <Link className="btn">Message</Link>
                                    <Link className="btn">Call Our</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <GoogleMap
                                center={center}
                                zoom={15}
                                mapContainerStyle={{ height: "80vh" }}
                                options={{
                                    streetViewControl: false,
                                    mapTypeControl: false,
                                    fullscreenControl: false,
                                }}
                            >
                                <Marker position={center} />
                                <Marker position={center2} />
                            </GoogleMap>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default OrderSucces;
