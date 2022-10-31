import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

import "./igslider.css";

import ig1 from "../../../assets/ig/instagram1.webp";
import ig2 from "../../../assets/ig/instagram2.webp";
import ig3 from "../../../assets/ig/instagram3.webp";
import ig4 from "../../../assets/ig/instagram4.webp";
import ig5 from "../../../assets/ig/instagram5.webp";
import ig6 from "../../../assets/ig/instagram6.webp";

function SampleNextArrow(props) {
    const { onClick } = props;
    return <i className="ri-arrow-right-circle-fill ri-3x" onClick={onClick}></i>;
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return <i className="ri-arrow-left-circle-fill ri-3x" onClick={onClick}></i>;
}

const IgSlider = () => {
    const isDesktopLg = useMediaQuery({ query: " (min-width:1725px)" });
    const isDesktopSm = useMediaQuery({ query: "(max-width: 1724px)" });
    const isDesktopS = useMediaQuery({ query: "(max-width: 1334px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 824px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 524px)" });

    const settings = {
        dots: true,
        className: "center",
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        speed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    const settings1 = {
        dots: true,
        className: "center",
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        speed: 2000,
    };
    const settings2 = {
        dots: true,
        className: "center",
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        speed: 2000,
    };
    const settings3 = {
        className: "center",
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        speed: 2000,
    };
    const settings4 = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="ig__section">
            {isDesktopLg && (
                <Slider {...settings} className="1">
                    <div>
                        <img src={ig1} alt="" />
                    </div>
                    <div>
                        <img src={ig2} alt="" />
                    </div>
                    <div>
                        <img src={ig3} alt="" />
                    </div>
                    <div>
                        <img src={ig4} alt="" />
                    </div>
                    <div>
                        <img src={ig5} alt="" />
                    </div>
                    <div>
                        <img src={ig6} alt="" />
                    </div>
                </Slider>
            )}

            {isDesktopSm && (
                <Slider {...settings1} className="ig-2">
                    <div>
                        <img src={ig1} alt="" />
                    </div>
                    <div>
                        <img src={ig2} alt="" />
                    </div>
                    <div>
                        <img src={ig3} alt="" />
                    </div>
                    <div>
                        <img src={ig4} alt="" />
                    </div>
                    <div>
                        <img src={ig5} alt="" />
                    </div>
                    <div>
                        <img src={ig6} alt="" />
                    </div>
                </Slider>
            )}
            {isDesktopS && (
                <Slider {...settings2} className="ig-3">
                    <div>
                        <img src={ig1} alt="" />
                    </div>
                    <div>
                        <img src={ig2} alt="" />
                    </div>
                    <div>
                        <img src={ig3} alt="" />
                    </div>
                    <div>
                        <img src={ig4} alt="" />
                    </div>
                    <div>
                        <img src={ig5} alt="" />
                    </div>
                    <div>
                        <img src={ig6} alt="" />
                    </div>
                </Slider>
            )}
            {isTablet && (
                <Slider {...settings3} className="ig-4">
                    <div>
                        <img src={ig1} alt="" />
                    </div>
                    <div>
                        <img src={ig2} alt="" />
                    </div>
                    <div>
                        <img src={ig3} alt="" />
                    </div>
                    <div>
                        <img src={ig4} alt="" />
                    </div>
                    <div>
                        <img src={ig5} alt="" />
                    </div>
                    <div>
                        <img src={ig6} alt="" />
                    </div>
                </Slider>
            )}
            {isMobile && (
                <Slider {...settings4} className='5'>
                    <div>
                        <img src={ig1} alt="" />
                    </div>
                    <div>
                        <img src={ig2} alt="" />
                    </div>
                    <div>
                        <img src={ig3} alt="" />
                    </div>
                    <div>
                        <img src={ig4} alt="" />
                    </div>
                    <div>
                        <img src={ig5} alt="" />
                    </div>
                    <div>
                        <img src={ig6} alt="" />
                    </div>
                </Slider>
            )}
        </div>
    );
};

export default IgSlider;
