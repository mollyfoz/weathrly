import React, { Component } from 'react';
import './styles.css';
import Search from './Search.js';
import Current from './Current.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import Card from './Card.js';
import Background from './Background.js';
import Weather from './Weather.js';
import TenDayCard from './TenDayCard.js';
import key from './Key.js';
import Trie from './Trie.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'closed',
      condition: {}
    }
  }

  changeStatus(cityLocation) {
    this.setState({
      status: 'open',
    })
    this.callAPI(cityLocation);
  }

  callAPI(cityLocation) {
    fetch(`http://api.wunderground.com/api/${key}/conditions/forecast10day/hourly/q/${cityLocation}.json`)
      .then(data => data.json())
      .then(data => {
        const locationInfo = new Weather(data);
        this.setState({
          condition: locationInfo
        })
      })
      .catch(error => console.log('now you fucked up'))
  }

   display() {
    if (this.state.status === 'closed') {
      return (
      <div>
        <Background />
        <section className='main-container'>
          <article  className='component-container'>
            <Search changeStatus={this.changeStatus.bind(this)}/>
          </article>
        </section>
      </div>)
  } else {
    return (
      <div>
        <Background />
          <section className='main-container'>
            <article  className='component-container'>
              <Search changeStatus={this.changeStatus.bind(this)}/>
              <h3 className='current-title'>CURRENTLY</h3>
              <Current current={this.state.condition}/>
              <h3 className='hour-title'>7 HOUR</h3>
              <SevenHour hourly={this.state.condition} />
              <h3 className='ten-day-title'>TEN DAY</h3>
              <TenDay daily={this.state.condition}/>
            </article>
          </section>
          <audio className='morning-audio' autoPlay>
            <source src='assets/rossini-william-tell-overture-1.mp3' autoPlay/>
          </audio>
      </div>)
    }
  }

  render() {

      const { city, temp, description, icon, high, low, month, day, summary, hour, hourIcon, hourTemp, weekDay, weekDayHigh, weekDayLow, weekDayIcon, hourlyInfo } = this.state.condition;

    return (
      <div className='App'>
      {this.display()}
      </div>
    )
  }
}
export default App;
