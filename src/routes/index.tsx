import React from "react";
import { Routes, Route } from "react-router-dom"
import Main from "../components/Main";
import BookingPage from "../screens/BookingPage";


const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/home" element={<Main />} />
            <Route path="/booking" element={<BookingPage />} />
        </Routes>
    )
};

export default AppRoutes