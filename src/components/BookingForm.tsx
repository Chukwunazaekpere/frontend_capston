import React, { useEffect, useState } from "react";
import "../styles/formstyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
    const [formState, setFormState] = useState({
        disableBookButton: true,
        formFields: {}as any,
        confirmBooking: false,
        confirmText: "Book Now"
    });
    const reservationTime = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00",]
    const occassionList = ["Birthday", "Wedding", ]
    const formFields = ["Reservation Date", "Reservation Time", "Number of Guests", "Occassion"];
    const handleFormChange = (field:string, value: string) => {
        formState.formFields[field] = value;
        const enteredFields = Object.keys(formState.formFields);
        if(enteredFields.length === formFields.length){
            let valid = 0;
            enteredFields.forEach(key => {
                if(formState.formFields[key]){
                    valid++
                }if(valid === formFields.length){
                    formState.disableBookButton = false;
                }else{
                    formState.disableBookButton = true;
                }
            })
        }
        setFormState({...formState});
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
    const navigate = useNavigate()
    const handleFormSubmit = (act: string) => {
        if(act.toLowerCase() === 'confirm'){
            formState.confirmText = "Your reservation was successful"
        }else{
            formState.confirmText = "Confirm Booking"
        }
        setFormState({...formState});
        if(act.toLowerCase() === 'confirm'){
            navigate("/home")
        }
    }
    return(
        <div className="col-6">
            <span className="row d-flex justify-content-center">
                <h3 className="text-center font-weight-bold">{formState.confirmText}</h3>
                {
                    formState.confirmBooking ?
                    <span role="dialog">
                        {
                            Object.keys(formState.formFields).map(key => (
                                <input className="form-control my-2" disabled value={formState.formFields[key]} type="text" />
                            ))
                        }
                    </span>
                    :
                    <form name="booking-form" className="align-items-center form-group justify-content-center" method="post" action={process.env.REACT_APP_FETCH_URL}>
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
                    </form>
                }
            </span>
            <span  className="row d-flex justify-content-end py-3">
                <button style={{height: "37px"}} onClick={()=> handleFormSubmit(formState.confirmBooking ? "Confirm" : "Book")} disabled={formState.disableBookButton} className="btn btn-primary col-2">
                    {formState.confirmBooking ? "Confirm" : "Book"}
                </button>
            </span>
        </div>
    )
}

export default BookingForm