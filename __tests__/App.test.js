import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import App from '../src/containers/App';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should render a <Header /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(Header)).toEqual(true)
  });
});

