import React, { Component } from 'react';
import cities from './cities.js';
import Trie from './Trie.js';


export default class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tree: new Trie(),
      theSuggestions: [],
      changeClass: [
        'input-container',
        'title'],
      input: '',
    };
  }

  componentWillMount() {
    if (window.localStorage.length > 0) {
      let cityLocation = localStorage.getItem('recentCity')
      if (cityLocation === 'error') {
      } else {
        this.props.changeStatus(cityLocation);
        this.stateReset();
      }
    }
  }

  loadCities(cities) {
    this.state.tree.populate(cities);
  }

  suggestWord(e) {
    let userInput = this.state.tree.suggest(e)
    this.setState({
      theSuggestions: [...userInput],
      input: e,
    });
  }

  selectCity(e) {
    let cityLocation = e.target.innerText.split(', ').reverse().join('/').replace(' ', '_')
    localStorage.setItem('recentCity', cityLocation);
    this.stateReset();
    this.props.changeStatus(cityLocation);
  }

  handleSubmit(props) {
    let cityInput = document.getElementById('user-input').value
    let cityThing = cityInput.split(', ').reverse().join('/').replace(' ', '_')
    localStorage.setItem('recentCity', cityThing);
    this.stateReset();
    this.props.changeStatus(cityThing);
  }

  stateReset() {
    this.setState({
      changeClass: [
        'move-input-container',
        'move-h1'],
      theSuggestions: [],
      input: '',
    });
  }

  render() {
    if (this.state.input === '') {
      this.state.theSuggestions = [];
    }

    let newCity;

    if (this.state.theSuggestions !== undefined) {
      newCity = this.state.theSuggestions.map((city, i) =>
     <li key={'city ' + i} className='suggestion-city'
      onClick={(e) => this.selectCity(e)}>{city}</li>);
    }

    this.loadCities(cities.data);

    return (
      <div>
        <h1 className={this.state.changeClass[1]}>Weathrly</h1>
        <div className={this.state.changeClass[0]}>
          <input type='text' id='user-input'
            onChange={(e) => this.suggestWord(e.target.value)} placeholder='City, State or Zip Code'
            value={this.state.input}/>
          <div className='suggest-display'>
           <ul className='suggest-list'>
            {newCity}
           </ul>
          </div>
          <div className='search-btn' onClick={() => this.handleSubmit(this)} >
          <p className='search-btn-text'>SEARCH</p>
          </div>
        </div>
      </div>
    );
  }

}
