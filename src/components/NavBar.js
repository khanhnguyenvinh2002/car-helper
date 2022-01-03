import React,{useState} from 'react';
import './NavBar.css'
import headphone from "./../img/headphones1.svg"
import money from "./../img/Mpney.svg"
import stock from "./../img/stock.svg"
import personCheck from "./../img/Personcheck.svg"
import graph from "./../img/Group6.png"
import {Link} from "react-router-dom";
function NavBar(){
    const [isArtist,setIsArtist] = useState(true)
    return(
         <nav class="navbar navbar-expand-lg  bg-dark text-white justify-content-between" style={{height: "10vh"}}>
             <>
             <Link className="nav-link" to="/">Car Helper</Link>
        <div class="collapse navbar-collapse text-white" id="navbarText">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item active">
                <Link className="nav-link" to="/rental">Rental</Link>
            </li>
            <li class="nav-item active">
                <Link className="nav-link" to="/maintenance">Maintenance</Link>
            </li>
            </ul>
            </div>
            <Link className="nav-link" to="/waitlist">
            <button class="btn btn-outline-success" type="button" style={{marginRight: "10px", fontSize: "20px"}}>Join the waitlist</button>
            </Link>
        </>
        </nav>
    );
}

export default NavBar;
