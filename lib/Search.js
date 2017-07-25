import React, { Component } from 'react';
import Current from './Current.js';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.status = 'true',
    this.state = {
      changeClass: [
        'input-container',
        'title'],
      setPlaceholder: 'Search Location'
    }


  }

  handleSubmit(props) {
    const locationInput = document.getElementById('user-input');

      this.setState(
        {changeClass: [
          'move-input-container',
          'move-h1'],
        setPlaceholder: 'Search Another Location'
        }
      )
      locationInput.value = '';

  }

  render() {

    return (
      <div>
        <h1 className={this.state.changeClass[1]}>Weathrly</h1>
        <div className={this.state.changeClass[0]}>
          <input type='text' id='user-input' placeholder={this.state.setPlaceholder}/>
          <button className='search-btn' type='submit' onClick={this.handleSubmit.bind(this)}>Search</button>
        </div>
      </div>
    )
  }
}
