import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import "./clocksection.css";

const ClockSection = () => {
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    let interval;

    const countDown = () => {
        const destination = new Date("Nov 23, 2022");
        interval = setInterval(() => {
            const now = new Date().getTime();
            const different = destination - now;
            const days = Math.floor(different / (1000 * 60 * 60 * 24));
            const hours = Math.floor((different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((different % (1000 * 60)) / 1000);

            if (destination < 0) clearInterval(interval.current);
            else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        });
    };

    useEffect(() => {
        countDown();
    });

    return (
        <div className="time__count">
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="clock__content">
                            <h6 className="clock__content-subtitle">- Limited Offers -</h6>
                            <h3 className="clock__content-title mt-3">
                                The Most Delicious And Quality Fast Food In Our Store
                            </h3>
                            <Link className="btn clock-btn mt-4">Shop Now</Link>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="clock__wrapper">
                            <div className="clock__data">
                                <div className="clock__data-text">
                                    <h1 className="clock__data-title">{days}</h1>
                                    <h5 className="clock__data-subtitle">Days</h5>
                                </div>
                                <div className="clock__divi">:</div>
                            </div>

                            <div className="clock__data">
                                <div className="clock__data-text">
                                    <h1 className="clock__data-title">{hours}</h1>
                                    <h5 className="clock__data-subtitle">Hours</h5>
                                </div>
                                <div className="clock__divi">:</div>
                            </div>

                            <div className="clock__data">
                                <div className="clock__data-text">
                                    <h1 className="clock__data-title">{minutes}</h1>
                                    <h5 className="clock__data-subtitle">Minutes</h5>
                                </div>
                                <div className="clock__divi">:</div>
                            </div>

                            <div className="clock__data">
                                <div className="clock__data-text">
                                    <h1 className="clock__data-title">{seconds}</h1>
                                    <h5 className="clock__data-subtitle">Second</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ClockSection;
