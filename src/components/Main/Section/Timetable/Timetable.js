import React from "react";
import TableCreate from "../TableCreate/TableCreate";

//This component is displaying the match timetable implemting the timetable feature

export default function Main() {
    const tableCaption = "Match Timetable";
    const tableData = [
        { sport: 'Football', teams: 'Bendigo Football Club VS East Bendigo Football Club', time: '14:25', date: "2022-11-25", location: 'QEO', address: '30 Gaol Road, Bendigo, Vic, 3550' },
        { sport: 'Netball', teams: 'Strathdale Netball Club VS Golden Square Netball Club', time: '10:00', date: "2022-11-25", location: 'Golden City Netball Association', address: '91 Inglis Street, West Bendigo, Vic, 3550' },
        { sport: 'Soccer', teams: 'East Bendigo Soccer Club VS Marong Soccer Club', time: '15:00', date: "2022-11-27", location: 'Weeroona Oval', address: '347 Napier Street, Bendigo, Vic, 3550' },
        { sport: 'Squash', teams: 'Spring Gully Squash Club VS California Gully Squash Club', time: '12:00', date: "2022-11-30", location: 'Bendigo Squash Centre', address: '242 Barnard Street, Bendigo, Vic, 3550' }
    ];

    return (
        <div className="timetable_table_component">
            <h2>See the timetable for the lastest matches</h2>
            <TableCreate caption={tableCaption} arr={tableData} />
        </div>
    );
}