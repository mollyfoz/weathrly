import React, { Component } from 'react';
import './styles.css';
import Search from './Search.js';
import Current from './Current.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import Card from './Card.js';
import Graphic from './Graphic.js';
import Background from './Background.js';
// import Moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'closed'
    }
  }

  changeStatus() {
    this.setState({
      status: 'open'
    })
  }

   display() {
    if (this.state.status === 'closed') {
      return (<div>
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
              <Current />
              <Graphic />
              <SevenHour />
              <TenDay />
            </article>
          </section>
      </div>)
    }
  }

  render() {
    return (
      <div className='App'>
      {this.display()}
      </div>
    )
  }
}
export default App;
