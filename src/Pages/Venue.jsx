import {React, useState, useEffect} from "react";
import "./venue.css";
import Top from "../Statics/top.png";
import Head from "../Components/Head"
const Vanue = () => {
    const matchesData = require('../Services/Matches.json')
    const[scroll, setScroll] = useState(true)
    useEffect(() =>{
        document.addEventListener("scroll", function(e) {
            toggleVisibility();
          });
    })
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setScroll(true)
        } else {
          setScroll(false)
        }
      }
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    
    return ( 
        <>
            <Head title="All Matches Venue" />
            <div  className="card-container">
                {
                    matchesData.matches.map((val)=>(
                        <div className="matches-card">
                            <h4 style={{color:"#CD5C5C"}}>{val.team1} VS {val.team2}</h4>
                            <p><span><b>Date:</b> {val.date}</span><span style={{marginLeft:"15px"}}><b>Ground:</b> {val.venue}</span></p>
                            <p><span><b>Toss Winner:</b> {val.tosswinner}</span><span style={{marginLeft:"15px"}}><b>Match Winner:</b>{val.winner}</span></p>
                            <p><span><b>Man of the match:</b> {val.manofthematch}</span><span style={{marginLeft:"15px"}}><b>Best bowler:</b>{val.bowlerofthematch}</span></p>
                        </div>
                    ))
                }
            </div>
            {scroll && <button className="back-to-top" onClick={scrollToTop}><img style={{width:"35px"}} src={Top} alt="Top" /></button>}
        </>
     );
}
 
export default Vanue;