import React from "react";

export default function SportsList() {

    const sports = ['Netball','Football','Soccer','Squash','Tennis'];
    const sportsList = sports.map((sport) => <li key={sport.toString()}>{sport}</li>);

    return (
        <div className="sports_list">
            <ul>{sportsList}</ul>
        </div>
    );
} 