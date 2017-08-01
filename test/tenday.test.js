import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/TenDay';

describe('TenDay', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDay />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
