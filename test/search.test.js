import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search';
import LocalStorage from '../__mock__/storageMock.js'

describe('Search', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })
})
