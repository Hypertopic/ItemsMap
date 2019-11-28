import React from 'react';
import hypertopic from 'hypertopic';
import logo from './logo.svg';
import './App.css';

const API_KEY = 'Replace with Google API key'; //TODO
let db = hypertopic([
  'http://argos2.hypertopic.org',
  'http://steatite.hypertopic.org'
]);

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
  constructor() {
    super();
    this.state = {places:["Office du tourisme, Troyes"]};
  }

  render() {
    let markers = this.state.places.map(x => `&markers=${x}`);
    return (
      <img src={`https://maps.googleapis.com/maps/api/staticmap?center=Troyes&size=600x480&zoom=14${markers}&key=${API_KEY}`} />
    );
  }

  componentDidMount() {
    db.getView('/user/vitraux')
      .then(x =>
          x.vitraux.corpus.map(y => `/attribute/${y.id}/spatial`)
      )
      .then(db.getView)
      .then(x => Object.values(x)
        .map(y => Object.keys(y.spatial))
        .reduce((x, y) => x.concat(y)))
      .then(x => Array.from(new Set(x)))
      .then(x => x.filter(y => y.endsWith('Troyes')))
      .then(x => this.setState({places: x}))
      .catch(() => console.error('Services not responding'));
  }
}

export default App;
