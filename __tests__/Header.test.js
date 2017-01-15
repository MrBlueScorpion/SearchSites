/**
 * Created by Lixing on 15/1/17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header from '../src/components/Header';

describe('<Header />', () => {
  it('should render <Header /> component', () => {
    const wrapper = shallow(<Header />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});