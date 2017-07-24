import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h1>Weathrly</h1>
        <div className='input-container'>
          <input type='text' id='user-input' placeholder='Enter Location'/>
          <button className='search-btn' type='submit'>Search</button>
        </div>
      </div>
    )
  }
}
