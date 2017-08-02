import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDayCard from '../lib/TenDayCard';
import { mockWeather } from '../__mock__/mockData.js';


const mockIcon = mockWeather.hourly_forecast[0].icon_url;

const data = {
  dailyInfo: mockWeather.forecast.simpleforecast.forecastday,
  date: {
    weekday: mockWeather.forecast.simpleforecast.forecastday[0].date.weekday,
  },
  high: {
    fahrenheit: mockWeather.forecast.simpleforecast.forecastday[0].high.fahrenheit,
  },
  low: {
    fahrenheit: mockWeather.forecast.simpleforecast.forecastday[0].low.fahrenheit,
  },
};


 describe('TenDayCard', () => {
   let wrapper;

   beforeEach(() => {
     wrapper = shallow(<TenDayCard daily={data} />);
   });

   it('should exist', () => {
     expect(wrapper).toBeDefined();
   });

   it('should render a card', () => {
     let newCard = wrapper.find('ten-day-h-l');
     expect(newCard).toBeTruthy();
   });

   it('should render the next day on the card', () => {
     let newCard = wrapper.find('week-day');
     expect(newCard).toBeTruthy();
   });

   it('should render the icon on the card', () => {
     let newCard = wrapper.find('ten-day-icon');
     expect(newCard).toBeTruthy();
   });

   it('should render the high and low temps on the card', () => {
     let newCard = wrapper.find('ten-day-h-l');
     expect(newCard).toBeTruthy();
   });
})
