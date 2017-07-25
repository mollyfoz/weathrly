import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeClass: ['input-container', 'title']

    }
  }

  addMove() {
      this.setState({changeClass: ['move-input-container', 'move-h1']})
  }

  render() {

    return (
      <div>
        <h1 className={this.state.changeClass[1]}>Weathrly</h1>
        <div className={this.state.changeClass[0]}>
          <input type='text' id='user-input' placeholder='Enter Location'/>
          <button className='search-btn' type='submit' onClick={this.addMove.bind(this)}>Search</button>
        </div>
      </div>
    )
  }
}
