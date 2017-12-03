import React from 'react';

const Header = ({ }) => {

  render() {
    return
    <header>
      HEADCOUNT 2.0
      <input onChange={event => this.setState({ term: event.target.value})} />;
    </header>
  }
}
