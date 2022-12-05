import React from "react";
import TableCreate from "../TableCreate/TableCreate";

export default function Results() {

    const tableCaption ="Latest Match Results"
    const tableData = [
        {sport: "Football", home: "Bendigo Football Club", away: "Strathdale Football Club", homeScore: 30, awayScore: 25, winner: "Bendigo Football Club"},
        {sport: "Netball", home: "Golden Square Netball Club", away: "California Gully Netball Club", homeScore: 8, awayScore: 12, winner: "Golden Square Netball Club"},
        {sport: "Tennis", home: "Flora Hill Tennis Club", away: "Epsom Tennis Club", homeScore: 2, awayScore: 1, winner:"Flora Hill Tennis Club"},
        {sport: "Football", home: "Strathdale Football Club", away: "Bendigo Football Club", homeScore: 33, awayScore: 20, winner:"Strathdale Football Club"},
        {sport: "Squash", home: "East Bendigo Squash Club", away: "Marong Squash Club", homeScore: 10, awayScore: 8, winner:"East Bendigo Squash Club"},
        {sport: "Soccer", home: "Flora Hill Soccer Club", away: "Maiden Gully Soccer Club", homeScore: 24, awayScore: 26, winner:"Maiden Gully Soccer Club"}
    ];
    
    return (
        <div className="results_container">
            <h2>Match Results below</h2>
            <TableCreate className="results_table" caption={tableCaption} arr={tableData} />
        </div>
    );
} 