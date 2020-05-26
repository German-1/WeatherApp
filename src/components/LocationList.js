import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city={'Buenos Aires,ar'} />
        <WeatherLocation city={'Bogotá,col'} />
        <WeatherLocation city={'London,uk'} />
    </div>
);

export default LocationList;