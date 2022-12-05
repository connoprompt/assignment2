import React from "react";

//This component is returning a sports list, it satisfies the sports list feature.

export default function SportsList() {

    const sports = ['Netball','Football','Soccer','Squash','Tennis'];
    const sportsList = sports.map((sport) => <li key={sport.toString()}>{sport}</li>);

    return (
        <div className="sports_list">
            <h1>Steele Sports Portal supports the following sports</h1>
            <ul>{sportsList}</ul>
        </div>
    );
} 