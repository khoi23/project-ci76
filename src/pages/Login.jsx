import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import LoginImg from "../assets/6333040.jpg";
import Helmet from "../components/Helmet/Helmet";

import "../styles/login.css";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

import { toast } from "react-toastify";

import { motion } from "framer-motion";
import { useEffect } from "react";

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            const user = userCredential.user;
            setLoading(false);
            toast.success("Succesfully logged in");
            navigate(-1);
        } catch (error) {
            setLoading(false);
            toast.error(error.message);
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Helmet title={`Login`}>
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <motion.div
                                className="box__register"
                                initial={{ x: -80, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="box__register-img">
                                    <img src={LoginImg} alt="" />
                                </div>
                                <div className="box__register-content">
                                    <h3>Don't have an account?</h3>
                                    <h6>Get Started By Creating Your New Account</h6>
                                    <Link className="regiter-outline-btn" to="/register">
                                        Register
                                    </Link>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center section__login">
                            <motion.div
                                initial={{ x: 80, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <h3>Welcome Back</h3>
                                <h6>We are happing to have you back</h6>
                                <form className="form mb-3 login__form" onSubmit={handleLogin}>
                                    <div className="form__group">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                        />
                                    </div>
                                    <div className="form__group">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                        />
                                    </div>

                                    {error && <div className="login__error">Wrong email or password?</div>}
                                    <button type="submit" className="login__btn btn">
                                        Login
                                    </button>
                                </form>

                                <div className="login__forgot">
                                    <Link to={"/forgotpassword"}>Forgot Password?</Link>
                                </div>
                                <div className="login__or">
                                    <div className="login__or-left"></div>
                                    <h6>Or</h6>
                                    <div className="login__or-right"></div>
                                </div>
                                <div className="login__social">
                                    <Link className="login__social-item">
                                        <i className="ri-google-fill"></i>
                                    </Link>
                                    <Link className="login__social-item">
                                        <i className="ri-facebook-fill"></i>
                                    </Link>
                                    <Link className="login__social-item">
                                        <i className="ri-github-line"></i>
                                    </Link>
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Login;
