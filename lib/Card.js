import React, { Component } from 'react';


export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='card'>
        <h2>7 PM</h2>
        <h3> 77 F </h3>
      </div>
    )
  }
}
