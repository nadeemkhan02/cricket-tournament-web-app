import React from "react";
import "./home.css";
import {NavLink} from "react-router-dom";

const Home = (props) => {
    return (
        <>
            <div className="card-container">
                <div class="card">
                    <div>
                        <img style={{ width: "170px" }} class="card-img" src="https://www.graphicnews.com/media/GN/39007/T/jpg/EN" alt="Suresh Dasari Card" />
                    </div>
                    <div className="card-body" style={{width:"65%",margin:"auto"}}>
                        <h5 class="card-title">Countries/Teams</h5>
                        <p class="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                        <button type="button" class="btn btn-primary"><NavLink style={{textDecoration:"none", color:"#ffffff"}} activeClassName="Current" exact to="/teams">View Teams</NavLink></button>
                    </div>
                </div>

                <div class="card">
                    <div className="card-body" style={{width:"65%",margin:"auto"}}>
                        <h5 class="card-title">Players</h5>
                        <p class="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                        <button type="button" class="btn btn-primary"><NavLink style={{textDecoration:"none", color:"#ffffff"}} activeClassName="Current" exact to="/teams">View Players</NavLink></button>
                    </div>
                    <div>
                        <img style={{ width: "240px" }} class="card-img" src="https://voiceofindiansports.com/wp-content/uploads/2020/01/image_search_1579179435941.jpg" alt="Suresh Dasari Card" />
                    </div>
                </div>

                <div class="card">
                    <div>
                        <img style={{ width: "250px" }} class="card-img" src="https://www.cricket365.com/content/uploads/2016/08/picture-5333.jpg" alt="Suresh Dasari Card" />
                    </div>
                    <div className="card-body" style={{width:"65%",margin:"auto" }}>
                        <h5 class="card-title">Venue</h5>
                        <p class="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                        <button type="button" class="btn btn-primary"><NavLink style={{textDecoration:"none", color:"#ffffff"}} activeClassName="Current" exact to="/vanue">View Venue</NavLink></button>
                    </div>
                </div>

                <div class="card">
                    <div className="card-body" style={{width:"65%",margin:"auto"}}>
                        <h5 class="card-title">Matches</h5>
                        <p class="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                        <button type="button" class="btn btn-primary"><NavLink style={{textDecoration:"none", color:"#ffffff"}} activeClassName="Current" exact to="/matches">View Matches</NavLink></button>
                    </div>
                    <div>
                        <img style={{ width: "220px" }} class="card-img" src="https://static.vecteezy.com/system/resources/thumbnails/000/363/846/small/cricket_logo_5.png" alt="Suresh Dasari Card" />
                    </div>
                </div>

                <div class="card">
                    <div>
                        <img style={{ width: "280px" }} class="card-img" src="https://resources.pulse.icc-cricket.com/photo-resources/2021/05/10/e6cdd009-ec4b-48cd-a3be-b69351df4387/ICC-WTC-Ranking-11-.png?width=845&height=475" alt="Suresh Dasari Card" />
                    </div>
                    <div className="card-body" style={{width:"65%",margin:"auto" }}>
                        <h5 class="card-title">Tournament Score Table</h5>
                        <p class="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                        <button type="button" class="btn btn-primary">View Score Table</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;