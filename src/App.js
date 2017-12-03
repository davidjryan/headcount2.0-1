import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      selectedCards: [],
      comparedCard: null
    }
  }
  render() {
    return (
      <div>
        <Header />
        <section></section>
      </div>
    );
  }
}

export default App;
