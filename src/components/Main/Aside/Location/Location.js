import React from "react";

//Compontent for housing the embedded map from Google Maps.

export default function Location() {
    return (
        <div className="Location">
            <h2 id="locationHeader">Find Club locations</h2>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe title="mapembeded" width="350" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=Bendigo,%20Vic&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </div>
    );
} 