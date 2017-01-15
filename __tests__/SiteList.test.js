/**
 * Created by Lixing on 15/1/17.
 */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { SiteList } from '../src/components/SiteList';

describe('<SiteList />', () => {
  it('renders without crashing', () => {
    shallow(<SiteList />);
  });

  it('should not render a <ul />', () => {
    const wrapper = shallow(<SiteList />);
    const ul = '<ul></ul>';
    expect(wrapper.contains(ul)).toEqual(true);
  });

});


