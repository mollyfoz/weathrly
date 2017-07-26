import React, { Component } from 'react';
import Card from './Card.js'

export default class TenDay extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='ten-day-container'>
        <div className='ten-day'>
          <ul className='day-list'>
            <li className='day-list-item'><Card /></li>
            <li className='day-list-item'><Card /></li>
            <li className='day-list-item'><Card /></li>
            <li className='day-list-item'><Card /></li>
            <li className='day-list-item'><Card /></li>
            <li className='day-list-item'><Card /></li>
            <li className='day-list-item'><Card /></li>
            <li className='day-list-item'><Card /></li>
            <li className='day-list-item'><Card /></li>
            <li className='day-list-item'><Card /></li>  
          </ul>
        </div>
      </div>
    )
  }
}
