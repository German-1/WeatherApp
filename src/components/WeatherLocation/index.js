import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import { SUN } from './../../constants/weathers';
import './styles.css';

const locatiton = "Buenos Aires,ar";

const api_key = "fae4953631559c2eaaa68bcb1b7ce531";

const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${locatiton}&appid=${api_key}`;

const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};

class WeatherLocation extends Component {

    state = {
        city: 'Buenos Aires',
        data: data1,
    };

    handleUpdateClick = () => {
        fetch(api_weather).then(data => {
            console.log(data);
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data });
        });
        console.log("actualizado");
    }

    //se invoca justo antes de que el montaje ocurra
    componentWillMount() {
        console.log("componentWillMount");
    }

    //se invoca inmediatamente después de que un componente se monte
    componentDidMount() {
        console.log("componentDidMount");
    }

    //se invoca justo antes de renderizar cuando llegan nuevos props o se esta recibiendo el estado
    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    //se invoca inmediatamente después de que la actualización ocurra
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }


    render = () => {
        console.log("render");
        const { city, data } = this.state;
        return (
            <div className='weatherLocationCont' >
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;