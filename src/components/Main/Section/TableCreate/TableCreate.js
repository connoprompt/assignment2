import React from "react";

/*
This is another one of my favourite components, you've already seen this component but I've moddifed the first loop to use .map instead.
I tried for awhile to get .map working on the second loop but implementing it on an object was taking up to much time so this works for now. 

This component is designed to take an array of key value pairs from the component that calls it and turn those values into a table. 
*/

export default function TableCreate(props) {
    const arrKeys = props.arr[0]; //Returns the first line of the array data from the component that calls this component
    const arrData = props.arr; // Returns the full array of data from the component that calls this component
    const tableData = []; // Hold filtered table data

    //For each key in the arrKeys array add the td tag and add it to the headData array.
    const headData = Object.keys(arrKeys).map(key => {
        return <th>{key}</th>;
    });

    //For each Object in the data array, extract the key value from each element in the object, surround it with td tags and add it to a temp array. Then add the temp arr to the tableData array surrounded with a table row using TR tags 
    arrData.forEach(object => {
        let arr = [];
        for (let value in object) {
            arr.push(<td>{object[value]}</td>);
        }
        tableData.push(<tr>{arr}</tr>);
    });

    return (
        <table>
            <caption>{props.caption}</caption>
            <thead>{headData}</thead>
            <tbody>{tableData}</tbody>
        </table>
    )
}