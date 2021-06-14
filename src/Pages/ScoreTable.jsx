import React from "react";
import Head from "../Components/Head";
import { teamData } from "../Services/Teams";
import "./score.css";
import trophy from "../Statics/trophy.png";

const ScoreTable = () => {
    const matchData = require("../Services/Matches.json");
    const { Winner } = matchData;
    return (
        <>
            <Head title="Score Table:" />
            <div className="card-container">
                <table style={{textAlign:"center", marginTop:"20px"}} class="table table-dark">
                    <thead>
                        <tr className="scoreData">
                            <th scope="col">Rank:</th>
                            <th scope="col">Team:</th>
                            <th scope="col">Play:</th>
                            <th scope="col">Win:</th>
                            <th scope="col">Points:</th>
                        </tr>
                    </thead>
                    {teamData.map((val) => (
                        <tbody>
                            <tr>
                                <th scope="row">{teamData.indexOf(val)+1}</th>
                                <td>{val.name}</td>
                                <td>{val.play}</td>
                                <td>{val.win}</td>
                                <td>{parseInt(val.win)*2}</td>
                            </tr>
                        </tbody>
                    ))
                    }
                </table>
                <div><h5 style={{textAlign:"center"}}>Winner of The Series: <b>Team {Winner}</b> <img style={{width:"30px"}} src={trophy} alt="trophy" /></h5></div>
            </div>
        </>
    );
}

export default ScoreTable;