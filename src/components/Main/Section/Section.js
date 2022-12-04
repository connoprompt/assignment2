import React from "react";
import SportsList from "./SportsList/SportsList";
import Results from "./Results/Results";
import Timetable from "./Timetable/Timetable";
import PhotoGallery from "./PhotoGallery/PhotoGalley";


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
