import React, { Component } from 'react';
import Current from './Current.js';
import cities from './cities.js';
import Trie from './Trie.js';


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.status = 'true',
    this.state = {
      tree: new Trie(),
      theSuggestions: [],
      changeClass: [
        'input-container',
        'title'],
      setPlaceholder: 'City, State or Zip Code',
      inputField: 'hi',
    }
  }

  suggestWord(e) {
    let userInput = this.state.tree.suggest(e)
    this.setState ({
      theSuggestions: [...userInput]
    })
  }

  loadCities(cities)  {
    this.state.tree.populate(cities)
  }

  selectCity(e)  {
    let selected = e.target.innerText
    let cityLocation = selected.split(', ');

    [cityLocation[0], cityLocation[1]] = [cityLocation[1], cityLocation[0]];
    cityLocation = cityLocation.join('/')
    cityLocation = cityLocation.replace(' ', '_')

    this.setState ({

    })


    this.handleSubmit();
    this.props.changeStatus(cityLocation)
  }


  handleSubmit(props) {
    let cityLocation = document.getElementById('user-input').value;
      this.setState(
        {
          changeClass: [
          'move-input-container',
          'move-h1'],
          setPlaceholder: 'Search Another Location',
          theSuggestions: [],
        }
      )
    this.props.changeStatus(cityLocation)
  }

  render() {

    let newCity

    if(this.state.theSuggestions !== undefined) {
     newCity = this.state.theSuggestions.map((city, i) => <li key={'city ' + i} className='suggestion-city' onClick={(e) => this.selectCity(e)}>{city}</li>)
   }

    this.loadCities(cities.data)

    return (
      <div>
        <h1 className={this.state.changeClass[1]}>Weathrly</h1>
        <div className={this.state.changeClass[0]}>
          <input type='text' id='user-input' onKeyUp={(e) => this.suggestWord(e.target.value)} placeholder={ this.state.setPlaceholder } />
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
