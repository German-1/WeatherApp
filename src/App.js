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
            Título
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectedLocation}
              >
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
              <div className='detail'></div>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}
export default App;
