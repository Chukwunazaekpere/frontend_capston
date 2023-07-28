import React, { useState } from "react";
import "../styles/formstyle.css"

const BookingForm = () => {
    const [formState, setFormState] = useState({}as any);
    const reservationTime = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00",]
    const occassionList = ["Birthday", "Wedding", ]
    const formFields = ["Reservation Date", "Reservation Time", "Number of Guests", "Occassion"];
    const handleFormChange = (field:string, value: string) => {
        formState[field] = value;
        setFormState({...formState})
    }
    return(
        <form className="form-container" action="post">
            {
                formFields.map(fields => (
                    <React.Fragment>
                        <label htmlFor={fields}>{fields}</label>
                        {
                            (!fields.toLowerCase().includes("occassion") && !fields.toLowerCase().includes("time")) ?
                            <input 
                                onChange={e => handleFormChange(fields, e.target.value)} 
                                type={fields.toLowerCase().includes('date') ? 'date' : 'number'} 
                            />
                            :
                            <select 
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
    )
}

export default BookingForm