import { useState } from "react";

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