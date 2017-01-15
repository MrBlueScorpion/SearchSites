/**
 * Created by Lixing on 15/1/17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import SiteList from '../src/components/SiteList';

describe('<SiteList />', () => {
  let props;
  beforeEach(() => {
    props = {
      sites: [
        {
          id: 1,
          siteName: 'SurferMag',
          siteUrl: 'www.surfermag.com',
          description: 'This is the description for SurferMag',
          categoryIds: [
            2
          ]
        },
        {
          id: 2,
          siteName: 'Ebay',
          siteUrl: 'www.ebay.com.au',
          description: 'This is the description for ebay',
          categoryIds: [
            1
          ]
        }
      ]
    };
  });

  it('renders without crashing', () => {
    shallow(<SiteList {...props} />);
  });

  it('should render 3 <li />', () => {
    const wrapper = shallow(<SiteList {...props} />);
    expect(wrapper.find('li')).toHaveLength(2);
  });

});


