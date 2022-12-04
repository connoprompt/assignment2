import React from "react";


export default function ContactForm() {
    
    
    function handleForm(e) {
        e.preventDefault();
        console.log('You have clicked submit.');
    }

    return (
        <div className="contactFormContainer">
            <form className="contactForm" method="post" onSubmit={handleForm}>
                <fieldset>
                <legend>Share your thoughts with us.</legend>
                <label>
                    Full Name:
                    <input type="text" name="name" placeholder="eg. John Smith"/>
                </label>
                <label>
                    E-mail:
                    <input type="email" name="email" placeholder="eg. john.smith@internet.com"/>
                </label>
                <label>
                    Your Message:
                    <textarea name="msg"></textarea>
                </label>
                <input type="submit" value="Submit" />
                </fieldset>
            </form>
        </div>
    );
} 