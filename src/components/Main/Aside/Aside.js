import React from "react";

import Weather from "./Weather/Weather";
import Location from "./Location/Location";

export default function Aside() {
    return (
        <div className="Aside">
            <h2>Aside</h2>
            <Weather />
            <Location />
        </div>
    );
} 