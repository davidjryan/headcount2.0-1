import React, { Component } from 'react';
import Header from './Header';
import DistrictRepository from './helper'
import kinderData from '../data/kindergartners_in_full_day_program.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: new DistrictRepository(kinderData),
      districtOne: '',
      districtTwo: '',
      comparedCard: false
    }

    this.districtSearch = this.districtSearch.bind(this);
  }

  districtSearch(term) {
    const { data } = this.state
    console.log(term);
    const filteredData = data.filter(searchedTerm => searchedTerm.hasOwnProperty(term))

    return this.setState({ data: filteredData })
  }

  loadDataSet(filePath) {
    const repo = new DistrictRepository(filepath)
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
