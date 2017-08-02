import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';
import { mockWeather } from '../__mock__/mockData.js';


const mockIcon = mockWeather.hourly_forecast[0].icon_url

const data = {
   icon_url: `../lib/assets/${mockIcon}.svg`,
   temp: mockWeather.hourly_forecast[0].temp.english,
   FCTTIME: {
     civil: mockWeather.hourly_forecast[0].FCTTIME.civil
   }
 }

describe('Card', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card hourly={data} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render a card', () => {
    let newCard = wrapper.find('card');
    expect(newCard).toBeTruthy();
  })

  it('should render the next hour on the card', () => {
    let newCard = wrapper.find('hour-time');
    expect(newCard).toBeTruthy();
  })

  it('should render the hour icon on the card', () => {
    let newCard = wrapper.find('hour-icon');
    expect(newCard).toBeTruthy();
  })

  it('should render the hour temp on the card', () => {
    let newCard = wrapper.find('hour-temp');
    expect(newCard).toBeTruthy();
  })

})
