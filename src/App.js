import React from 'react';
import logo from './logo.svg';
import './App.css';

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
      <p>Ma carte de Troyes</p>
    );
  }
}

export default App;
