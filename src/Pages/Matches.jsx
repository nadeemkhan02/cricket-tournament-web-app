import React from "react";
import Head from "../Components/Head";

const Matches = () => {
    const matchData = require("../Services/Matches.json")
    const {matches} = matchData
    return (
        <>
            <Head title="All Matches" />
          <div style={{marginTop:"20px", alignItems:"center"}} className="card-container">
            <table style={{textAlign:"center"}} class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Match No:</th>
                        <th scope="col">Match:</th>
                        <th scope="col">Ground:</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        matches.map((val) => (
                            <tr>
                                <th scope="row">{matches.indexOf(val)+1}</th>
                                <td>{val.team1} VS {val.team2}</td>
                                <td>{val.venue}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </>
    );
}

export default Matches;