/* eslint-disable */

import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import expect from 'expect';

import Button from '../Button.jsx';

describe('<Button/>', () => {
  it('should render an ``', () => {
    const wrapper = shallow(<Button/>);
    expect(wrapper.is('button')).toExist();
  });

  it('should render an title', () => {
    const wrapper = shallow(<Button value="title"/>);
    expect(wrapper.text()).toBe('title');
  });

  it('simulates click events', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Button onClick={onClick}/>);

    expect(onClick.calledOnce).toBe(false);
    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).toBe(true);
  });
});
