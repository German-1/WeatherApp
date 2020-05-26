import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const locatiton = "Buenos Aires,ar";

const api_key = "fae4953631559c2eaaa68bcb1b7ce531";

const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${locatiton}&appid=${api_key}`;

class WeatherLocation extends Component {

    state = {
        city: 'Buenos Aires',
        data: null,
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

    componentWillMount() {
        this.handleUpdateClick();
    }

    render = () => {
        const { city, data } = this.state;
        return (
            <div className='weatherLocationCont' >
                <Location city={city} />
                {data ? <WeatherData data={data} /> :
                    <CircularProgress size={60} thickness={7} />
                }
            </div>
        );
    }
}

export default WeatherLocation;