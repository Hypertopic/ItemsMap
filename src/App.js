import React from 'react';
import logo from './logo.svg';
import './App.css';

const API_KEY = 'Replace with Google API key'; //TODO

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Où voir des vitraux à Troyes ?</h1>
      </header>
      <CityMap/>
    </div>
  );
}

class CityMap extends React.Component {
  render() {
    return (
      <img src={`https://maps.googleapis.com/maps/api/staticmap?center=Troyes&size=600x480&zoom=14&key=${API_KEY}`} />
    );
  }
}

export default App;
