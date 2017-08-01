import React from 'react';
import { shallow, mount } from 'enzyme';
import Current from '../lib/Current';

describe('Current', () => {



  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Current />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
