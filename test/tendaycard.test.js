import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDayCard from '../lib/TenDayCard';
import { mockWeather } from '../__mock__/mockData.js';


const mockIcon = mockWeather.hourly_forecast[0].icon_url

const data = {
  dailyInfo: mockWeather.forecast.simpleforecast.forecastday,
  weekDayIcon: mockWeather.forecast.simpleforecast.forecastday[0].icon_url,
  weekDay: {
    dailyInfo: {
      0: {
        date: {
          weekday: mockWeather.forecast.simpleforecast.forecastday[0].date.weekday
        }
      }
    }
  },
    weekDayHigh: {
    high: {
      fahrenheit:  mockWeather.forecast.simpleforecast.forecastday[0].high.fahrenheit
    }
  },
   weekDayLow: {
     low: {
       fahrenheit: mockWeather.forecast.simpleforecast.forecastday[0].low.fahrenheit
     }
   }
 }

describe('TenDayCard', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDayCard daily={data}  />)
  })

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
