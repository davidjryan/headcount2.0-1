import React, { Component } from 'react';

class Header extends Component {
constructor(props) {
  super(props);

  this.state = { term: '' };
}
  render() {
    return(
    <header>
      HEADCOUNT 2.0
      <input onChange={event => this.setState({ term: event.target.value })} />
    </header>
    )
  };

  onInputChange(term) {

  }
}

default export Header;
