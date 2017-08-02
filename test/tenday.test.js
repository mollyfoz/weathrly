import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/TenDay';
import TenDayCard from '../lib/TenDayCard';
import { mockWeather } from '../__mock__/mockData.js';

const mockIcon = mockWeather.hourly_forecast[0].icon_url

const data = {
  icon_url: `../lib/assets/${mockIcon}.svg`,
  temp: mockWeather.hourly_forecast[0].temp.english,
  FCTTIME: {
    civil: mockWeather.hourly_forecast[0].FCTTIME.civil,
  },
};

describe('TenDay', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDay daily={data}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render day list cards', () => {
    let newCard = wrapper.find('ten-day-list-item');
    expect(newCard).toBeTruthy();
  });

  it.skip('should render ten list items', () => {
    const wrapper = mount(<TenDayCard daily={data} />);
    const cards = wrapper.find('ten-day-list-item');
    expect(cards).toHaveLength(10);
  });
})
