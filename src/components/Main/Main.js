import React from "react";

import Aside from "./Aside/Aside";
import ResultsTable from "./ResultsTable/ResultsTable";
import SportsList from "./SportsList/SportsList";
import TimetableTable from "./TimetableTable/TimetableTable";



export default function Main() {
    return (
        <div className="Main">
            <SportsList />
            <TimetableTable />
            <ResultsTable />
            <Aside />
        </div>
    );
} 