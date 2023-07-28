import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navs = ["Home", "Bookings", "Contact us", "About"];
    return(
        <nav>
            <ul className="row">
                {
                    navs.map(item => (
                        <NavLink to={item.toLowerCase().replaceAll(" ", "-")} className="col-md-3 col-sm-2" key={item}>
                            {item}
                        </NavLink>
                    ))
                }
            </ul>
        </nav>
    )
};

export default Navbar