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
        <h3>7 PM</h3>
        <h4> 77 F </h4>
      </div>
    )
  }
}
