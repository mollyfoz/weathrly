import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { hourly } = this.props;

    return (
      <div className='card'>
        <div className='hour-card-back'></div>
        <h3 className='hour-time'>{ hourly.FCTTIME.civil }</h3>
        <img className='hour-icon' src={ hourly.icon_url }/>
        <h4 className='hour-temp'>{ hourly.temp.english }</h4>
      </div>
    );
  }

}
