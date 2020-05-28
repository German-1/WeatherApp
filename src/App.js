import React, { Component } from 'react';
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

  handleSelectionLocation = city => {
    console.log("handleSelectionLocation");
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList
            cities={cities}
            onSelectLocation={this.handleSelectionLocation}
          >
          </LocationList>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
