import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
function Route() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )

}


export default Route;