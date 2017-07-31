import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';


describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have a default status of closed and condition of empty object', () => {
    expect(wrapper.state()).toEqual({ status: 'closed', condition: {}})
  })

  it('should change the status when a city is passed in', (cityLocation) => {
    expect(wrapper.state()).toEqual({ status: 'closed', condition: {}})
    wrapper.setState({ status: 'closed' })
    expect(wrapper.state(cityLocation)).toEqual({ status: 'open'})

  })

})
