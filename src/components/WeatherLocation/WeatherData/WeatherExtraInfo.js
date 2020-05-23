import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({ humidity, wind }) => ( // Template string 
    <div>
        <span>{`${humidity} % | `}</span>  
        <span>{`${wind} wind`}</span>
    </div>
);

WeatherExtraInfo.propType = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;