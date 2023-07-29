import React from "react";
import BookingForm from "../components/BookingForm";


const BookingPage = () => {
    return(
        <div className="row d-flex justify-content-center">
            {/* <h3 className="text-center font-weight-bold text-uppercase">Bookings</h3> */}
            <BookingForm />
        </div>
    )
}

export default BookingPage