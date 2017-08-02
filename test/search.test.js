import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search';
import Trie from '../lib/Trie.js';
import LocalStorage from '../__mock__/storageMock.js'

describe('Search', () => {

  let wrapper;
  let props = {
    tree: new Trie(),
    theSuggestions: [],
    changeClass: [
      'input-container',
      'title'],
    setPlaceholder: 'City, State or Zip Code'
  }


  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render title', () => {
    let title = wrapper.find('h1')
    expect(title).toHaveLength(1)
  })

  it('should initialize an empty array', () => {
    expect(wrapper.state().theSuggestions).toEqual(expect.arrayContaining([]))
  })

  it.skip('should render current weather when local storage is not empty', () => {
    const local = global.localStorage
    local.setItem('recentCity', 'ny/rochester')

    expect(wrapper.instance().componentWillMount()).toEqual('ny/rochester')
  })

  it.skip('should add words to the suggestions array', () => {
    let userInput = 'string'
    wrapper.instance().suggestWord(userInput)
    expect(wrapper.state().theSuggestions).toEqual(expect.arrayContaining([userInput]))
  })

  it.skip('should have a button', () => {
    const mockFn = jest.fn();
    const comp = shallow(<Search onClick={mockFn} />)
    const btn = comp.find('search-btn')

    btn.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
    btn.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('should render the list of suggestions', () => {
    let newList = wrapper.find('suggestion-city');
    expect(newList).toBeTruthy();
  })

  it('should render a search button', () => {
    let newButton = wrapper.find('search-btn');
    expect(newButton).toBeTruthy();
  })

  it('should render an input field', () => {
    let newInput = wrapper.find('user-input');
    expect(newInput).toBeTruthy();
  })

})
