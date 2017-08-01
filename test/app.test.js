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
    expect(wrapper.state()).toEqual({ status: 'closed', condition: {} })
  })

  it('should change the status', () => {

    expect(wrapper.state()).toEqual({ status: 'closed', condition: {} })
    wrapper.setState({ status: 'open', condition: {} })
    expect(wrapper.state()).toEqual({ status: 'open', condition: {} })
  })

  it.skip('should call API if valid url is present', () => {

  })

  it.skip('should create a new weather object when API is called', () => {

  })

  it.skip('should set state condition to the weather object', () => {

  })

  it.skip('should show an error message if API url is not valid', (data) => {
    wrapper.instance().callAPI = jest.fn()

    expect.assertions(data);
    return wrapper(data).catch(error =>
      expect(error).toMatch('error')
    )
  })

})
