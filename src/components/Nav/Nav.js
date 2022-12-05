import React from "react";

//The Nav compontent that houses all the navigation buttons

export default function Nav() {

    return (
        <div className="Nav">
            <a href=".results_container">
            <button className="btnStyle">Match Results</button>
            </a>
            <a href=".timetable_table_component">
            <button className="btnStyle">Match Timetable</button>
            </a>
            <a href=".photo_gallery">
            <button className="btnStyle">Team Photo Gallery</button>
            </a>
            <a href=".sports_list">
            <button className="btnStyle">Sports we follow</button>
            </a>
        </div>
    );
} 