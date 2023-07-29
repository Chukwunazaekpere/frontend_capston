import React from "react";
import Navbar from "./Navbar";


const Header = () => {
    const navs = ["Home", "Contact us", "About"]
    return(
       <main style={{height: "15vh", justifyContent: "space-between"}} className="row justify-between px-3 pt-1">
            <span style={{fontWeight: "bold", fontSize: "30px"}} className="col-4">Little Lemon</span>
            <span className="col-4">
                <Navbar  />
            </span>
            <hr />
       </main>
    )
};

export default Header