import React,{useState} from 'react';
import './HomePage.css'
import headphone from "./../img/headphones1.svg"
import money from "./../img/Mpney.svg"
import stock from "./../img/stock.svg"
import personCheck from "./../img/Personcheck.svg"
import graph from "./../img/Group6.png"
import {Link} from "react-router-dom";
function HomePage(){
    const [isArtist,setIsArtist] = useState(true)
    return(
        <>
        <div className="testclass" style={{height: '90vh',alignItems: 'center', display:"flex", justifyContent: 'space-evenly', flexDirection:"column"}}>

            <Link className="nav-link" to="/rental">
                <button style={{width: '50vw',margin: "0 auto"}}>
                    Long-term rental service
                </button>
            </Link>
            <Link className="nav-link" to="/maintenance"> 
                <button style={{width: '50vw',margin: "0 auto"}}>
                Maintenance service
                </button>
            </Link>
           
        </div>
        </>);
}

export default HomePage;
