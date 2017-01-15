import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { SearchBox } from '../src/components/SearchBox';
import { SiteList } from '../src/components/SiteList';

describe('<SearchBox />', () => {
  it('renders without crashing', () => {
    shallow(<SearchBox />);
  });

  it('should not render a <SiteList /> component', () => {
    const wrapper = shallow(<SearchBox />);
    expect(wrapper.find(SiteList)).to.have.length(0);
  });
});

