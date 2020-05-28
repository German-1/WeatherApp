import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities, onSelectLocation }) => {

    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectLocation(city);
    }

    const strToComponent = cities => (
        cities.map(city =>
            (
                <WeatherLocation
                    key={city}
                    city={city}
                    onWeatherLocationClick={() => handleWeatherLocationClick(city)}
                />
            )
        )
    );

    return (
        <div>
            {strToComponent(cities)}
        </div>
    );
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectLocation: PropTypes.func,
}

export default LocationList;