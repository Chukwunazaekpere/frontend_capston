import React from "react";
import { Routes, Route } from "react-router-dom"
import Main from "../screens";
import BookingPage from "../screens/BookingPage";


const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/home" element={<Main />} />
            <Route path="/bookings" element={<Main />} />
            <Route path="/contact-us" element={<Main />} />
            <Route path="/about" element={<Main />} />
        </Routes>
    )
};

export default AppRoutes