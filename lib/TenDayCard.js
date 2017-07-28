import React, { Component } from 'react';


export default class TenDayCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { daily } = this.props
    return (
      <div className='ten-day-card'>
        <div className='ten-day-card-back'></div>
        <h3 className='week-day'>{daily.date.weekday}</h3>
        <img className='ten-day-icon' src={daily.icon_url}/>
        <h4 className='ten-day-h-l'>H {daily.high.fahrenheit}  L {daily.low.fahrenheit}</h4>
      </div>
    )
  }
}
