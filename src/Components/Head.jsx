import React from "react";
import back from "../Statics/previous.png";
import "./head.css";
import {NavLink} from "react-router-dom";
const Head = (props) => {
    return ( 
        <>
            <div className="head">
                <div style={{width:"20%"}}>
                    <NavLink to="/"><img style={{width:"30px"}} src={back} alt="back" /></NavLink>
                </div>
                <div style={{width:"80%", marginRight:"20%"}}>
                    <p className="heading" >{props.title}</p>
                </div>
            </div>
        </>
     );
}
 
export default Head;