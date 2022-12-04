import React from "react";
import Location from "./Location/Location";
import ContactForm from "./ContactForm/ContactForm";

export default function Aside() {
    return (
        <div className="Aside">
            <h2>Aside</h2>
            <Location />
            <ContactForm />
        </div>
    );
} 