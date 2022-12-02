import React from "react";

export default function TableCreate(props) {
    const tableData = [];
    const headData = [];
    const arrKeys = props.arr[0];
    const arrData = props.arr;
    const keys = Object.keys(arrKeys);

    //For each key in the arrKeys array add the td tag and add it to the headData array.
    keys.forEach(key => {
        headData.push(<th><td>{key}</td></th>);
    });
    
    //For each Object in the data array, extract the key value from each element in the object, surround it with td tags and add it to a temp array. Then add the temp arr to the tableData array surrounded with a table row using TR tags 
    arrData.forEach(object => {
        let arr = [];
        for (let value in object) {
            arr.push(<td>{object[value]}</td>);
        }
        tableData.push(<tr>{arr}</tr>);
    });

    const newArr = [1,2,3,4,5];

    const outputArr = newArr.map(multiply());

    function multiply(x) {
        return x * 2;
    }

    console.log(outputArr);

    return (
        <table>
            {headData}
            {tableData}
        </table>
    )
}