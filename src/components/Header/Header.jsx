import React, { useEffect, useRef } from "react";
import "./Header.css";
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.webp";

import useAuth from "../../custom-hook/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import { selectTotalQty } from "../../store/CartSlice";

import { motion } from "framer-motion";

const nav__links = [
    {
        display: "Home",
        path: "/home",
    },
    {
        display: "Shop",
        path: "/products",
    },
    {
        display: "Blog",
        path: "/blog",
    },
    {
        display: "Contact",
        path: "/contact",
    },
];

const Header = () => {
    const menuRef = useRef(null);
    const headerRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

    const totalAmount = useSelector(selectTotalQty);

    const { currentUser } = useAuth();

    const Logout = () => {
        signOut(auth)
            .then(() => {
                toast.success("Logged out");
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    const profileAction = useRef(null);

    const stickyheaderFunc = () => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("header__shrink");
            } else {
                headerRef.current.classList.remove("header__shrink");
            }
        });
    };
    useEffect(() => {
        stickyheaderFunc();
        return () => window.removeEventListener("scroll", stickyheaderFunc);
    });

    const toggleProfileAction = () => profileAction.current.classList.toggle("showActionsLogin");

    return (
        <motion.header animate={"show"} initial="hidden" className="header" ref={headerRef}>
            <Container>
                <div className="header__wrapper d-flex align-items-center justify-content-between">
                    <Link to={"/home"} className="header__wrapper-logo">
                        <img src={logo} alt="logo" navigate="/home" />
                    </Link>

                    {/* ======= menu ======= */}
                    <div className="navigation" ref={menuRef}>
                        <div className="header__wrapper-menu d-flex align-items-center gap-5">
                            <i className="ri-close-line ri-xl header__wrapper-menu__close" onClick={toggleMenu}></i>
                            {nav__links.map((item, index) => (
                                <NavLink
                                    to={item.path}
                                    key={index}
                                    className={(navClass) => (navClass.isActive ? "active__menu" : "")}
                                    onClick={toggleMenu}
                                >
                                    {item.display}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* ======== nav right icons ========= */}
                    <div className="header__wrapper-right d-flex align-items-center gap-4">
                        <span className="header__wrapper-cart__icon">
                            <Link to="/cart">
                                <i className="ri-shopping-basket-line"></i>
                            </Link>
                            <span className="header__wrapper-cart__badge">{totalAmount}</span>
                        </span>

                        <span className="header__wrapper-favorite__icon">
                            <Link to="/favorite">
                                <i className="ri-heart-3-line"></i>
                            </Link>
                        </span>

                        <span className="header__wrapper-user__icon">
                            {currentUser ? (
                                <div className="header__logined">
                                    {currentUser.photoURL ? (
                                        <img
                                            src={currentUser.photoURL}
                                            alt=""
                                            className="header__logined-logo"
                                            onClick={toggleProfileAction}
                                        />
                                    ) : (
                                        <div
                                            className="header__logined-logo header__logined-logo-text"
                                            onClick={toggleProfileAction}
                                        >
                                            N
                                        </div>
                                    )}

                                    <div className="header__logined__box" ref={profileAction}>
                                        {currentUser.displayName ? (
                                            <span>{currentUser.displayName}</span>
                                        ) : (
                                            <span>{currentUser.email}</span>
                                        )}
                                        <hr />
                                        <Link to="/login" onClick={Logout}>
                                            Logout
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <Link to="/login">
                                    <i className="ri-user-line"></i>
                                </Link>
                            )}
                        </span>

                        <span className="header__wrapper-mobile__menu" onClick={toggleMenu}>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </motion.header>
    );
};

export default Header;
