import React from "react";

import Aside from "./Aside/Aside";
import Section from "./Section/Section";

//Compontent to house both the main content and the aside content

export default function Main() {
    return (
        <div className="Main">
            <Section />
            <Aside />
        </div>
    );
} 