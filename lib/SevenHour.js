import React, { Component } from 'react';
import Card from './Card.js';
import App from './App.js'

export default class SevenHour extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { hourly } = this.props;

    let hourlyCards;

    if (hourly.hourlyInfo) {
      hourlyCards = hourly.hourlyInfo.map((hour, i) =>
      <li key={'hour ' + i} className='hour-list-item'><Card hourly={hour} /></li>)
    }

    return (
      <div className='seven-hr-container'>
        <div className='seven-hour'>
          <ul className='hour-list'>
            {hourlyCards}
          </ul>
        </div>
      </div>
    );
  }
}
