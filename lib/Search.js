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
    }
  }

  suggestWord(e) {
    let userInput = this.state.tree.suggest(e)
    this.setState ({
      theSuggestions: [...userInput]
    })
  }

  stateReset()  {
    this.setState ({
          changeClass: [
          'move-input-container',
          'move-h1'],
          setPlaceholder: 'Search Another Location',
          theSuggestions: []
    })
  }

  loadCities(cities)  {
    this.state.tree.populate(cities)
  }

  // resetField()  {
  //   document.getElementById('user-input').reset()
  // }

  selectCity(e)  {
    let cityLocation = e.target.innerText.split(', ').reverse().join('/').replace(' ', '_')
    console.log(cityLocation)


    localStorage.setItem('recentCity', cityLocation);
    this.stateReset();
    // this.resetField();

    // this.setState ({
    //       changeClass: [
    //       'move-input-container',
    //       'move-h1'],
    //       setPlaceholder: 'Search Another Location',
    //       theSuggestions: []
    // })
    this.props.changeStatus(cityLocation)
  }

  componentWillMount() {
    if(window.localStorage.length > 0) {
       let cityLocation = localStorage.getItem('recentCity')

       if(cityLocation === 'error') {}

       else{
         this.props.changeStatus(cityLocation)
         this.stateReset();
      //    this.setState({
      //      changeClass: [
      //      'move-input-container',
      //      'move-h1']
      //  })
     }
    }
  }

  handleSubmit(props) {
    let cityInput = document.getElementById('user-input').value
    let cityThing = cityInput.split(', ').reverse().join('/').replace(' ', '_')

    localStorage.setItem('recentCity', cityThing);
    this.stateReset();
      // this.setState(
      //   {
      //     changeClass: [
      //     'move-input-container',
      //     'move-h1'],
      //     setPlaceholder: 'Search Another Location',
      //     theSuggestions: []
      //   }
      // )
    this.props.changeStatus(cityThing)
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
          <input type='text' id='user-input' onKeyUp={(e) => this.suggestWord(e.target.value)} placeholder='City, State or Zip Code' />
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
