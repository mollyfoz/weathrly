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
      setPlaceholder: 'Search Location',
      inputField: ''
    }
    console.log(this.state.setPlaceholder)
  }

  suggestWord(e) {
    // let locationInput = document.getElementById('user-input').value;
    let userInput = this.state.tree.suggest(e)
    this.setState ({
      inputField: e,
      theSuggestions: [...userInput]
    })
  }

  loadCities(cities)  {
    this.state.tree.populate(cities)
  }


  selectCity(e)  {
    console.log(e.target.innerText)
    let selected = e.target.innerText
    console.log(selected)
    this.setState ({
      theSuggestions: [],
      inputField: selected
    })
    console.log(selected)
    this.handleSubmit();
  }

  handleSubmit(props) {
      this.setState(
        {
          changeClass: [
          'move-input-container',
          'move-h1'],
          setPlaceholder: 'Search Another Location',
          theSuggestions: [],
        }
      )
      // locationInput.value = '';
      this.props.changeStatus();
  }

  render() {

    let newCity;


   if(this.state.theSuggestions !== undefined) {
     newCity = this.state.theSuggestions.map((city, i) => <li key={'city ' + i} className='suggestion-city' onClick={(e) => this.selectCity(e)}>{city}</li>)
    // console.log(typeOf (newCity))
   }



    this.loadCities(cities.data)

    return (
      <div>
        <h1 className={this.state.changeClass[1]}>Weathrly</h1>
        <div className={this.state.changeClass[0]}>
          <input type='text' id='user-input' onKeyUp={(e) => this.suggestWord(e.target.value)} placeholder={this.state.placeholder} />
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
