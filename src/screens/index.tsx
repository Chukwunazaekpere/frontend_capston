import React from "react";

import "../styles/main.css"
import { useLocation } from "react-router-dom";
import BookingPage from "./BookingPage";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Dashboard from "./Dashboard";

const Main = () => {
    const location = useLocation()
    const pathname = location.pathname;
    return(
        <main style={{height: "80vh"}} className="row d-flex">
            {
                pathname.includes('booking') ?
                <BookingPage />
                :
                pathname.includes('contact') ?
                <ContactUs />
                :
                pathname.includes('about') ?
                <AboutUs />
                :
                <Dashboard />
            }
        </main>
    )
};

export default Main