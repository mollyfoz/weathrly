import React, { Component } from 'react';
import TenDayCard from './TenDayCard.js';
import App from './App.js'

export default class TenDay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { daily } = this.props

    let dailyCards;

    if(daily.dailyInfo) {
      dailyCards = daily.dailyInfo.map((day, i) => <li key={'day ' + i} className='ten-day-list-item'><TenDayCard daily={day} /></li>)
    }

    return (
      <div className='ten-day-container'>
        <div className='ten-day'>
          <ul className='ten-day-list'>
            {dailyCards}
          </ul>
        </div>
      </div>
    )
  }
}
