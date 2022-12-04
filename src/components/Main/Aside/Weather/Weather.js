import React from "react";
import { Component } from "react";

class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: [],
            temp: [],
            wind: [],
            date: [],
            icon: [],
            rain: []
        }
    }
    

    componentDidMount() {
        let url = "http://api.weatherstack.com/current?access_key=c9fea49fb107976bfe4dea4ca0a0421c&query=Bendigo";
        
        fetch(url).then((resp) => resp.json()).then((data) => {
            this.setState({
                city: data.location.name,
                temp: data.current.temperature,
                wind: data.current.wind_speed,
                 
            })
        });



    }
    
    render() {
        return (
            <div className="Weather">
                <h2>Weather</h2>
            </div>
        );
    }
} 
