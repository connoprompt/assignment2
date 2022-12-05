import { useState } from "react";

/*This component is a custom hook, a hook designed to grab the values of the form when they change, confirm the form has been submitted and check errors, 
unfortauntely that last part was not implemented due to lack of time. */

export default function useForm(firstValues, callback) {

    const [values, setValues] = useState(firstValues);

    const handleForm = (e) => {
        if (e) {
            e.preventDefault();

            callback();

        }
    }

    const handleValueChange = (e, values) => {
            setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    }


    return { handleForm, handleValueChange, values };
}