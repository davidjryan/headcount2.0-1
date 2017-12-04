import React, { Component } from 'react';
import Header from './Header';
import DistrictRepository from './helper'
import kinderData from '../data/kindergartners_in_full_day_program.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      districtOne: '',
      districtTwo: '',
      comparedCard: false
    }

    this.districtSearch = this.districtSearch.bind(this);
    // this.loadDataSet(kinderData)
  }

  districtSearch(term) {
    const { data } = this.state
    console.log(term);
    const filteredData = data.filter(searchedTerm => searchedTerm.hasOwnProperty(term))

    return this.setState({ data: filteredData })
  }

  componentDidMount(filePath) {
    const repo = new DistrictRepository(kinderData)

    return this.setState({ data: repo.data })
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
