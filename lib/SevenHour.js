import React, { Component } from 'react';
import Card from './Card.js';

export default class SevenHour extends Component {
  constructor() {
    super();

    this.state = {
      hourCards: []
    }
  }

  populateCards() {
    this.setState({
      hourCards: [...this.state.hourCards]
    })
  }
//will have to add new value to array when we have API hooked up
  render() {
    return (
      <div className='seven-hr-container'>
        <div className='seven-hour'>
          <ul className='hour-list'>
            <li className='hour-list-item'><Card /></li>
            <li className='hour-list-item'><Card /></li>
            <li className='hour-list-item'><Card /></li>
            <li className='hour-list-item'><Card /></li>
            <li className='hour-list-item'><Card /></li>
            <li className='hour-list-item'><Card /></li>
            <li className='hour-list-item'><Card /></li>
          </ul>
        </div>
      </div>
    )
  }
}
