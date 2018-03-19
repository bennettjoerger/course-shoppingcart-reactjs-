import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {

  courses = [
    { name: 'Complete Web Dev course', price: 199},
    { name: 'Complete Web Dev2 course', price: 299},
    { name: 'Complete Web Dev3 course', price: 399},
    { name: 'Complete Web Dev4 course', price: 499}
  ]
  render() {

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Sales Page</h1>
        </header>
        <Coursesales items={this.courses}/>
      </div>
    );
  }
}

export default App;
