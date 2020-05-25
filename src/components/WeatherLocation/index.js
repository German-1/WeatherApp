import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
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

    getTemp = kelvin => {
        return convert(kelvin).from('K').to('C').toFixed(2);
    }

    getWeatherState = weather => {
        return SUN;
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(this.weather);
        const temperature = this.getTemp(temp);
        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`,
        }

        return data;
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(data => {
            console.log(data);
            return data.json();
        }).then(weather_data => {
            const data = this.getData(weather_data);
            this.setState({ data });
        });
        console.log("actualizado");
    }

    render = () => {
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