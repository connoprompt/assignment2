import React from "react";

export default function PhotoGallery() {

    //This compontent is displaying two teams headshot photos, satisfying the photo gallery feature

    return (
        <div className="photo_gallery">
            <h2>See the following teams</h2>
            <h4>Bendigo Football Club</h4>
            <div id="team1Name">
                <p>Player 1</p>
                <p>Player 2</p>
                <p>Player 3</p>
            </div>
            <div id="team1">
                <img src={require("../../../../images/man-7368408_640.jpg")} alt="Sports Player"></img>
                <img src={require("../../../../images/woman-1460150_640.jpg")} alt="Sports Player"></img>
                <img src={require("../../../../images/woman-4525710_640.jpg")} alt="Sports Player"></img>
            </div>
            <h4>East Bendigo Football Club</h4>
            <div id="team2Name">
                <p>Player 1</p>
                <p>Player 2</p>
                <p>Player 3</p>
            </div>
            <div id="team2">
                <img src={require("../../../../images/man-7450033_640.jpg")} alt="Sports Player"></img>
                <img src={require("../../../../images/woman-6126488_640.jpg")} alt="Sports Player"></img>
                <img src={require("../../../../images/woman-7368389_640.jpg")} alt="Sports Player"></img>
            </div>
        </div>
    );
} 