import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";
import { useParams } from "react-router-dom";

// import Carts from "../UI/cart/Carts.jsx";
// import { useSelector } from "react-redux";



const Layout = () => {
    // const showCart = useSelector((state) => state.cartUi.cartIsVisible);

    return (
        <div>
            <Header />

            <div>
                <Routes />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
