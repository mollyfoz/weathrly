import React from 'react';
import { shallow, mount } from 'enzyme';
import Current from '../lib/Current';
import { mockWeather } from '../__mock__/mockData.js';


const mockIcon = mockWeather.hourly_forecast[0].icon_url

const data = {
  icon_url: `../lib/assets/${mockIcon}.svg`,
  city: mockWeather.current_observation.display_location.full,
};

describe('Current', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Current current={data} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a city name', () => {
    let cityName = wrapper.find('current-city');
    expect(cityName).toBeTruthy();
  });

  it('should have a month and date', () => {
    let currentDate = wrapper.find('current-day');
    expect(currentDate).toBeTruthy();
  });

  it('should have a current temperature', () => {
    let currentTemp = wrapper.find('current-temp');
    expect(currentTemp).toBeTruthy();
  });

  it('should have a current description', () => {
    let currentDesc = wrapper.find('current-condition');
    expect(currentDesc).toBeTruthy();
  });

  it('should have an icon', () => {
    let currentIcon = wrapper.find('current-graphic');
    expect(currentIcon).toBeTruthy();
  });

  it('should have a summary of current weather', () => {
    let currentSum = wrapper.find('current-sum');
    expect(currentSum).toBeTruthy();
  });

  it('should show the current high temp', () => {
    let high = wrapper.find('high-temp');
    expect(high).toBeTruthy();
  });

  it('should show the current low temp', () => {
    let low = wrapper.find('low-temp');
    expect(low).toBeTruthy();
  });
})
