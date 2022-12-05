import React from "react";
import Location from "./Location/Location";
import ContactForm from "./ContactForm/ContactForm";
import Weather from "./Weather/Weather"

export default function Aside() {
    return (
        <div className="Aside">
            <Location />
            <Weather />
            <ContactForm />
        </div>
    );
} 