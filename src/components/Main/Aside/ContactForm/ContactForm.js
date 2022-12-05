import React from "react";
import useForm from "./useForm";

//This component is designed for the user form, it takes the input and lets the user know what was submitted using my custom hook useForm.


export default function ContactForm() {

    const confirmSubmit = () =>  {
        alert('We have recieved the following feedback ' +
        'Fullname : ' + values.name + 'Email: ' + values.email + 'You feel that ' + values.msg + 'We will get back to you as soon as we can' 
        )
    }
    const {values, handleValueChange, handleForm} = useForm({name: '', email: '', msg: ''}, confirmSubmit);
    return (
        <div className="contactFormContainer">
            <form className="contactForm" method="post" onSubmit={handleForm}>
                <fieldset>
                <legend>Share your thoughts with us.</legend>
                <label>
                    Fullname:
                    <input type="text" name="name" onChange={handleValueChange} value={values.name} placeholder="eg. John Smith" required/>
                </label>
                <label>
                    E-mail:
                    <input type="email" name="email" onChange={handleValueChange} value={values.email} placeholder="eg. john.smith@internet.com" required/>
                </label>
                <label>
                    Your Message:
                    <textarea name="msg" onChange={handleValueChange} value={values.msg} required></textarea>
                </label>
                <input type="submit" value="Submit" />
                </fieldset>
            </form>
        </div>
    );
} 