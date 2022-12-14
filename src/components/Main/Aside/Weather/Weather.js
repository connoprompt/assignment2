import React from "react";

/*This component is one of my favourite ones. It shows the current weather of my location Bendigo, using the weatherstack API. It calls the weather api, 
stores those values in a data array and then presents those values as a custom div. I am quite proud of this one. It satisfies the weather forecast feature.

I wanted to implement a 3 day forecast but weather stack require payment to get weekly forecast data. 

*/

class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: [],
            temp: [],
            wind: [],
            icon: [],
            rain: [],
            description: []
        }
    }


    componentDidMount() {
        let url = "http://api.weatherstack.com/current?access_key=c9fea49fb107976bfe4dea4ca0a0421c&query=Bendigo";

        fetch(url).then((resp) => resp.json()).then((data) => {
            this.setState({
                city: data.location.name,
                temp: data.current.temperature,
                wind: data.current.wind_speed,
                icon: data.current.weather_icons,
                rain: data.current.precip,
                description: data.current.weather_descriptions
            })
        });

    }


    render() {
        const {city, temp, wind, icon, rain, description} = this.state;
        return (
            <div className="Weather">
                <h2>Weather Forecast</h2>
                <div id="iconContainer">
                    <p>In {city} it is currently {description}</p>
                    <img id="weatherIcon"src={icon} alt={description}></img>
                </div>
                <div id="tempContainer">
                    <p>The temperature is {temp}&#176; with wind speeds at {wind}km/h </p>
                </div>
                <div id="rainContainer">
                    <p>Current rain forecast is {rain}% percipation</p>
                </div>                
            </div>
        );
    }

} 

export default Weather;
