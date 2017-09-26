import React, { Component } from 'react'
import App from './App.js'

export default class Current extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { current } = this.props

    return (
      <div>
        <div className='current-container'>
          <div className='current-background'></div>
          <h2 className='current-city'>{ current.city }</h2>
          <h3 className='current-temp'>{ current.temp }</h3>
          <h3 className='current-condition'>{ current.description } </h3>
        </div>
        <div className='graphic-container'>
          <div className='current-graphic'></div>
            <img src= { current.icon } className={ current.className } />
          <div className='sum-container'>
            <p className='current-sum'>{ current.summary }</p>
          </div>
          <h3 className='current-day'>{ current.month } { current.day }</h3>
          <p className='current-hi-lo'>High<br /><span className='high-temp'>{ current.high }</span>
            <br />Low<br /><span className='low-temp'>{ current.low }</span></p>
        </div>
      </div>
    )
  }

}
