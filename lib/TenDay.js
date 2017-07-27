import React, { Component } from 'react';
import TenDayCard from './TenDayCard.js';

export default class TenDay extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='ten-day-container'>
        <div className='ten-day'>
          <ul className='ten-day-list'>
            <li className='ten-day-list-item'><TenDayCard /></li>
            <li className='ten-day-list-item'><TenDayCard /></li>
            <li className='ten-day-list-item'><TenDayCard /></li>
            <li className='ten-day-list-item'><TenDayCard /></li>
            <li className='ten-day-list-item'><TenDayCard /></li>
            <li className='ten-day-list-item'><TenDayCard /></li>
            <li className='ten-day-list-item'><TenDayCard /></li>
            <li className='ten-day-list-item'><TenDayCard /></li>
            <li className='ten-day-list-item'><TenDayCard /></li>
            <li className='ten-day-list-item'><TenDayCard /></li>
          </ul>
        </div>
      </div>
    )
  }
}
