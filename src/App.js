import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './animation/gallery'

class App extends Component {

  render() {
    const margin={
        top: 30,
        left: 30,
        right: 30,
        bottom: 30
    }
    return (
      <div className="App">
        <Gallery margin={margin} width={500} height={600}/>
      </div>
    );
  }
}

export default App;
