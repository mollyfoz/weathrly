import React, { Component } from 'react';
import Moment from 'moment';

export default class Current extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
        <div className='current-container'>
          <div className='current-background'>
            <h2 className='current-city'>Denver, CO</h2>
            <h3 className='current-day'>July 23, 2017</h3>
            <h3 className='current-condition'>Hot as Balls</h3>
            <h3 className='current-temp'>97 F</h3>
            <h4 className='current-hi-lo'>97 F/ 72 F</h4>
            <p className='current-sum'>Way too fucking hot for Colorado</p>
          </div>
        </div>
    )
  }
}
