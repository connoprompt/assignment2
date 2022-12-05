import React from "react";
import SportsList from "./SportsList/SportsList";
import Results from "./Results/Results";
import Timetable from "./Timetable/Timetable";
import PhotoGallery from "./PhotoGallery/PhotoGalley";

//This compontent is used to display the main content in the main

export default function Section() {

    return (
        <div className="Section">
            <SportsList />
            <Results />
            <Timetable />
            <PhotoGallery />
        </div>
    );
}
