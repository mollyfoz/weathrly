import React, { Component } from 'react';
// import Moment from 'moment';

export default class Current extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
        <div className='current-container'>
          <div className='current-background'></div>
          <h2 className='current-city'>Denver, CO</h2>
          <h3 className='current-day'>July 23, 2017</h3>
          <h3 className='current-temp'>97 F</h3>
          <h3 className='current-condition'>"Hot as Balls"</h3>
        </div>
    )
  }
}
