import React, { Component } from 'react';
import Current from './Current.js';
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
      setPlaceholder: 'Search Location',
      inputField: null,
      theCity: 'hi'
    }
    console.log('1 ' + this.state.theCity)
    console.log(this.theSuggestions)
  }

  suggestWord(e) {
    let userInput = this.state.tree.suggest(e);
    console.log(e)

    this.setState ({
      inputField: e,
      theSuggestions: [...userInput]
    })
    console.log('2 ' + this.state.theSuggestions)
  }

  loadCities(cities)  {
    this.state.tree.populate(cities)
  }


  selectCity(e)  {
    let selectedCity = e.target.innerText.split(', ').reverse().join('/').replace(' ', '_');

    this.setState ({
      theSuggestions: [],
      theCity: selectedCity
    })
    console.log('city name '+ selectedCity)
    console.log('3 '+ this.state.theCity)
    this.handleSubmit();
  }

  handleSubmit(props) {
      this.setState({
          changeClass: [
          'move-input-container',
          'move-h1'],
          setPlaceholder: 'Search Another Location',
          theSuggestions: [],
        })
      this.props.changeStatus();
  }

  render() {
    let newCity;

    if (this.state.theSuggestions !== undefined) {
     newCity = this.state.theSuggestions.map((city, i) => <li key={'city ' + i} className='suggestion-city' onClick={(e) => this.selectCity(e)}>{city}</li>)
    }

    this.loadCities(cities.data)

    return (
      <div>
        <h1 className={this.state.changeClass[1]}>Weathrly</h1>
        <div className={this.state.changeClass[0]}>
          <input type='text' id='user-input' onChange={(e) => this.suggestWord(e.target.value)} placeholder={this.state.setPlaceholder} />
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
    )
  }
}
