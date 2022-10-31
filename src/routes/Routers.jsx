import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";

import ProtectedRoute from "./ProtectedRoute";
import OrderSucces from "../pages/OrderSucces";
import AdminDashboard from "../pages/AdminDashboard";
import WishList from "../pages/WishList";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route
                path="/home"
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
            />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favorite" element={<WishList />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:title" element={<BlogDetails />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/confirm" element={<OrderSucces />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
    );
};

export default Routers;
