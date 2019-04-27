import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  state = {
    text: 'text in state'
  };
  render() {
    return (
      <div className="app">
        <h1>App</h1>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
