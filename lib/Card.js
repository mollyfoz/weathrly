import React, { Component } from 'react';


export default class Card extends Component {
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
      <div className='card'>
        <div className='hour-card-back'></div>
        <h3 className='hour-time'>7 PM</h3>
        <img className='hour-icon' src='assets/Weather-Sun.png'/>
        <h4 className='hour-temp'> 77 F </h4>
      </div>
    )
  }
}
