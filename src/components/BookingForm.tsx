import React, { useEffect, useState } from "react";
import "../styles/formstyle.css";
import axios from "axios";

const BookingForm = () => {
    const [formState, setFormState] = useState({}as any);
    const reservationTime = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00",]
    const occassionList = ["Birthday", "Wedding", ]
    const formFields = ["Reservation Date", "Reservation Time", "Number of Guests", "Occassion"];
    const handleFormChange = (field:string, value: string) => {
        formState[field] = value;
        setFormState({...formState})
    };
    useEffect(() => {
        (async() => {
            try {
                const fetchResp = await axios.get(process.env.REACT_APP_FETCH_URL as string, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                console.log("\n\t Resp: ", fetchResp)
            } catch (error) {
            
            }
        })();
    }, []);
    // console.log("\n\t process.env.REACT_APP_FETCH_URL: ", process.env.REACT_APP_FETCH_URL)
    return(
        <form name="booking-form" className="align-items-center col-6 form-group justify-content-center" method="post" action={process.env.REACT_APP_FETCH_URL}>
            <h3 className="text-center font-weight-bold">Book Now</h3>
            {
                formFields.map(fields => (
                    <React.Fragment key={fields}>
                        <label className="col-form-label col-sm-2 col-md-12 pb--3" htmlFor={fields}>{fields}</label>
                        {
                            (!fields.toLowerCase().includes("occassion") && !fields.toLowerCase().includes("time")) ?
                            <input 
                                className="form-control pt--3"
                                onChange={e => handleFormChange(fields, e.target.value)} 
                                type={fields.toLowerCase().includes('date') ? 'date' : 'number'} 
                            />
                            :
                            <select 
                                className="form-control"
                                onChange={e => handleFormChange(fields, e.target.value)} 
                                name="" id="">
                                {
                                    (fields.toLowerCase().includes('time') ? reservationTime : occassionList).map(time => (
                                        <option key={time} value={time}>{time}</option>
                                    ))
                                }
                            </select>
                        }
                    </React.Fragment>
                ))
            }
            <span className="py-4 row justify-content-end px-2 d-flex">
                <button className="btn btn-primary py-2 col-2">
                    Book
                </button>
            </span>
        </form>
    )
}

export default BookingForm