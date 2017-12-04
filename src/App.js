import React, { Component } from 'react';
import Header from './Header';
import DistrictRepository from './helper'
import kinderData from '../data/kindergartners_in_full_day_program.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repo: null,
      data: [],
      districtOne: '',
      districtTwo: '',
      comparedCard: false
    }

    this.districtSearch = this.districtSearch.bind(this);
    // this.loadDataSet(kinderData)
  }

  districtSearch(term) {
    const { repo } = this.state
    return this.setState({ data: repo.findAllMatches(term) })
  }

  componentDidMount(filePath) {
    const repo = new DistrictRepository(kinderData)

    return this.setState({ repo, data: repo.findAllMatches() })
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
