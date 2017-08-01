import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/SevenHour';
import { mockWeather } from '../__mock__/mockData.js';


const mockIcon = mockWeather.hourly_forecast[0].icon_url

const data = {
   hourlyInfo: mockWeather.hourly_forecast
 }

describe('SevenHour', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHour hourly={data} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
