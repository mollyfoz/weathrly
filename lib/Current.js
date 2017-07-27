import React, { Component } from 'react';
import Key from './Key.js';
import Weather from './Weather.js';
// import Moment from 'moment';

export default class Current extends Component {
  constructor(props) {
    super(props);

    this.state = {
      condition: {}
    }
  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${Key}/conditions/forecast10day/hourly/q/CO/denver.json`)
      .then(data => data.json())
      .then(data => {
        const locationInfo = new Weather(data);
        console.log(locationInfo)
        this.setState({
          condition: locationInfo
        })
      })
      console.log(this.state.condition)
  }

  render() {

    const { city, temp, description, icon, high, low, month, day, summary } = this.state.condition;

    return(
      <div>
        <div className='current-container'>
          <div className='current-background'></div>
          <h2 className='current-city'>{ city }</h2>
          <h3 className='current-day'>{ month } { day }</h3>
          <h3 className='current-temp'>{ temp }</h3>
          <h3 className='current-condition'>"{ description } as balls"</h3>
        </div>
        <div className='graphic-container'>
          <div className='current-graphic'></div>
            <img src={ icon } className='icon'/>
          <p className='current-sum'>{ summary }</p>
          <p className='current-hi-lo'>High<br /><span className='high-temp'>{ high }</span><br />Low<br /><span className='low-temp'>{ low }</span></p>
        </div>
      </div>
    )
  }
}
