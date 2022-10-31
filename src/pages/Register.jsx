import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import LoginImg from "../assets/6333040.jpg";
import Helmet from "../components/Helmet/Helmet";

import "../styles/login.css";

// firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

import { auth } from "../firebase.config";
import { storage } from "../firebase.config";
import { db } from "../firebase.config";

import { toast } from "react-toastify";

const Register = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [file, setFile] = useState(null);

    const [loading, setLoading] = useState(false);

    const navitage = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            const user = userCredential.user;
            const storageRef = ref(storage, `images/${Date.now() + userName}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (error) => {
                    toast.error(error.message);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(user, { displayName: userName, photoURL: downloadURL });

                        await setDoc(doc(db, "users", user.uid), {
                            uid: user.uid,
                            displayName: userName,
                            email,
                            photoURL: downloadURL,
                        });
                    });
                }
            );
            setLoading(false);
            toast.success("Account created");
            navitage("/login");
        } catch (error) {
            setLoading(false);
            toast.error("something went wrong");
        }
    };
    return (
        <Helmet title={`Register`}>
            <section>
                <Container>
                    <Row>
                        {loading ? (
                            <Col lg="6" className="text-center">
                                <h4> Loading....</h4>
                            </Col>
                        ) : (
                            <Col lg="6" md="6" sm="12" className="m-auto text-center section__login">
                                <h3>Register Account</h3>
                                <h6>We are happing to have you back</h6>
                                <form className="form mb-3 login__form" onSubmit={handleSignup}>
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
                                            type="text"
                                            placeholder="Enter your Name"
                                            onChange={(e) => setUserName(e.target.value)}
                                            value={userName}
                                        />
                                    </div>
                                    <div className="form__group">
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                        />
                                    </div>
                                    <div className="form__group">
                                        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                                    </div>

                                    {error && <div className="login__error">Wrong email or password?</div>}
                                    <button type="submit" className="login__btn btn">
                                        Register
                                    </button>
                                </form>

                                <div className="login__forgot">
                                    <Link>Forgot Password?</Link>
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
                            </Col>
                        )}
                        <Col lg="6">
                            <div className="box__register">
                                <div className="box__register-img">
                                    <img src={LoginImg} alt="" />
                                </div>
                                <div className="box__register-content">
                                    <h3>Hello! Welcome Back</h3>
                                    <h6>Login with your data that you entered during your registration</h6>
                                    <Link className="regiter-outline-btn" to="/login">
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Register;
