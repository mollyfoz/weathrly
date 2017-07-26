import React, { Component } from 'react';

export default class Graphic extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='graphic-container'>
        <div className='current-graphic'></div>
        <div className="icon thunder-storm">
          <div className="cloud"></div>
          <div className="lightning">
            <div className="bolt"></div>
            <div className="bolt"></div>
          </div>
        </div>
        <p className='current-sum'>"Way too fucking hot for Colorado"</p>
        <p className='current-hi-lo'>High<br /><span className='high-temp'>97 F</span><br />Low<br /><span className='low-temp'>76 F</span></p>
      </div>
    )
  }
}
