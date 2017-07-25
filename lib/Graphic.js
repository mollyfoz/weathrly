import React, { Component } from 'react';

export default class Graphic extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='graphic-container'>
        <div className='current-graphic'>
        </div>
      </div>
    )
  }
}
