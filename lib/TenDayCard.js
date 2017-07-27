import React, { Component } from 'react';


export default class TenDayCard extends Component {
  constructor(props) {
    super(props);

      // this.state = {
      //   hour: hour,
      //   image: image,
      //   projTemp: projTemp,
      // }
  }

  render() {
    return (
      <div className='ten-day-card'>
        <div className='ten-day-card-back'></div>
        <h3 className='week-day'>MONDAY</h3>
        <img className='ten-day-icon' src='assets/Weather-Sun.png'/>
        <h4 className='ten-day-h-l'>H 74  L 60</h4>
      </div>
    )
  }
}
