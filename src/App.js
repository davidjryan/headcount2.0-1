import React, { Component } from 'react';
import Header from './Header';
import DistrictRepository from './helper'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repo: new DistrictRepository(dataSet),
      data: [],
      districtOne: '',
      districtTwo: '',
      comparedCard: false
    }

    this.districtSearch = this.districtSearch.bind(this);
  }

districtSearch(term) {
  const { data } = this.state
  const filteredData = data.filter(searchedTerm => searchedTerm.hasOwnProperty(term))

  return this.setState({ data: filteredData })
}


  render() {
    return (
      <div>
        <Header onSearchTermChange={ term => this.districtSearch(term) }/>
        <section></section>
      </div>
    );
  }
}

export default App;
