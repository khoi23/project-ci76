import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import { Provider } from "react-redux";
import Store from "./store/Store";

import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={Store}>
            <Router>

                <ToastContainer position="top-center" reverseOrder={false}></ToastContainer>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>
);
