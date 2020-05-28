import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Bogotá,col',
  'London,uk',
  'Washington dc,us',
  'Ciudad de México,mx',
  'Madrid,es',
];
class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }

  render() {
    return (
      <MuiThemeProvider>

        <Grid>
          <Row>
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className='red'></div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className='green'></div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className='blue'></div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className='yellow'></div>
            </Col>
          </Row>
        </Grid>

        {/* <div className="App">
          <LocationList
            cities={cities}
            onSelectedLocation={this.handleSelectedLocation}
          >
          </LocationList>
        </div> */}
      </MuiThemeProvider>
    );
  }
}
export default App;
