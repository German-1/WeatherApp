import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    handleSelectedLocation = city => {
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList
                cities={this.props.cities}
                onSelectedLocation={this.handleSelectedLocation}
            >
            </LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    cities: PropTypes.array.isRequired,
    setCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);