import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/SevenHour';
import Card from '../lib/Card';
import { mockWeather } from '../__mock__/mockData.js';


const mockIcon = mockWeather.hourly_forecast[0].icon_url

const data = {
  hourlyInfo: mockWeather.hourly_forecast.splice(0, 7),
  icon_url: `../lib/assets/${mockIcon}.svg`,
  temp: mockWeather.hourly_forecast[0].temp.english,
  FCTTIME: {
    civil: mockWeather.hourly_forecast[0].FCTTIME.civil,
  },
};

describe('SevenHour', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHour hourly={data} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render hour list cards', () => {
    let newCard = wrapper.find('hour-list-item');
    expect(newCard).toBeTruthy();
  });

  it.skip('should render seven list items', () => {
    const wrapper = mount(<Card hourly={data} />);
    const cards = wrapper.find('hour-list-item');
    expect(cards).toHaveLength(7);
  });
})
