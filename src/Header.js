import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return(
    <header>
      HEADCOUNT 2.0
      <input onChange={event => this.onInputChange(event.target.value)} />
    </header>
    )
  };
}

export default Header;
