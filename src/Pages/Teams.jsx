import { React, useState } from "react";
import "./teams.css";
import Head from "../Components/Head"
import { teamData } from "../Services/Teams";
import { NavLink } from "react-router-dom";
import player from "../Statics/cricket-player.png"
import bat from "../Statics/cricket-bat.png";
import ball from "../Statics/cricket.png";
import allrouneder from "../Statics/cricket-all.png";

const Teams = () => {
    const [country, setCountry] = useState("")
    return (
        <>
            <Head title="All Teams" />
            <div className="card-container">
                {
                    teamData.map((val) => (
                        <div className="team-card">
                            <div className="card-body">
                                <h5><b>{val.name}</b> <img style={{ width: "45px" }} class="cardimg" src={val.flag} alt="Country flag" /></h5>
                                <p>{val.profile.profile}</p>
                                <div className="cardfooter">
                                    <h5><b>Captain:</b> {val.profile.capton}</h5>
                                    <h5><b>Wise Captain:</b> {val.profile.wisecapton}</h5>
                                </div>
                                <button onClick={() => (setCountry(val.name))} id="player-btn" data-toggle="modal" data-target="#exampleModal" class="btn n-primary"><NavLink style={{ textDecoration: "none", color: "#ffffff" }} activeClassName="Current" exact to="/teams">View Player</NavLink></button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Players</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {
                                country === "India" && teamData[0].players.map((val) => (
                                    <div className="player-Card">
                                        <div className="player-image">
                                            <img src={player} alt="player photo" />
                                        </div>
                                        <div className="player-data">
                                            <h6>Name: {val.name}</h6>
                                            <h6>Age: {val.age}</h6>
                                            <h6>{val.type}&nbsp;<img style={{width:"20px"}} src={val.type === "batsman" ? bat : val.type === "bowler" ? ball : allrouneder } alt="type" /></h6>
                                        </div>
                                    </div>
                                ))
                            }
                            {
                                country === "Pakistan" && teamData[1].players.map((val) => (
                                    <div className="player-Card">
                                        <div className="player-image">
                                            <img src={player} alt="player photo" />
                                        </div>
                                        <div className="player-data">
                                            <h6>Name: {val.name}</h6>
                                            <h6>Age: {val.age}</h6>
                                            <h6>{val.type}&nbsp;<img style={{width:"20px"}} src={val.type === "batsman" ? bat : val.type === "bowler" ? ball : allrouneder } alt="type" /></h6>
                                        </div>
                                    </div>
                                ))
                            }
                            {
                                country === "England" && teamData[2].players.map((val) => (
                                    <div className="player-Card">
                                        <div className="player-image">
                                            <img src={player} alt="player photo" />
                                        </div>
                                        <div className="player-data">
                                            <h6>Name: {val.name}</h6>
                                            <h6>Age: {val.age}</h6>
                                            <h6>{val.type}&nbsp;<img style={{width:"20px"}} src={val.type === "batsman" ? bat : val.type === "bowler" ? ball : allrouneder } alt="type" /></h6>
                                        </div>
                                    </div>
                                ))
                            }
                            {
                                country === "Austrila" && teamData[3].players.map((val) => (
                                    <div className="player-Card">
                                        <div className="player-image">
                                            <img src={player} alt="player photo" />
                                        </div>
                                        <div className="player-data">
                                            <h6>Name: {val.name}</h6>
                                            <h6>Age: {val.age}</h6>
                                            <h6>{val.type}&nbsp;<img style={{width:"20px"}} src={val.type === "batsman" ? bat : val.type === "bowler" ? ball : allrouneder } alt="type" /></h6>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Teams;