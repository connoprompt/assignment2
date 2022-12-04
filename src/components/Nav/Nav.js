import React from "react";

export default function Nav() {
    return (
        <div className="Nav">
            <div className="btnContainer">
            <button className="btnResults">Match Results</button>
            </div>
            <div className="btnContainer">
                <button className="btnTimetable">Match Timetable</button>
            </div>
            <div className="btnContainer">
                <button className="btnGallery">Team Photo Gallery</button>
            </div>
            <div className="btnContainer">
                <button className="btnList">Sports we follow</button>
            </div>
        </div>
    );
} 