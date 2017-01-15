import React from 'react';
import { mount } from 'enzyme';
import { SearchForm } from '../src/components/SearchForm';
import SiteList from '../src/components/SiteList';

describe('<SearchForm />', () => {
  it('should render a <SearchForm /> component', () => {
    const props = {
      keyword: '',
      sites: [],
      searchSite: () => {}
    };
    const wrapper = mount(<SearchForm {...props} />);
    expect(wrapper.find('input')).toBeTruthy();
  });

  it('should render a <SearchForm /> component', () => {
    const props = {
      keyword: 'surf, ebay',
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
      ],
      searchSite: () => {}
    };
    const wrapper = mount(<SearchForm {...props} />);
    expect(wrapper.find(SiteList)).toBeTruthy();
    expect(wrapper.find(SiteList).find('li')).toHaveLength(2);
  });

  it('should render a <SearchForm /> component', () => {
    const props = {
      keyword: 'surf, ebay',
      sites: [
      ],
      searchSite: () => {}
    };
    const wrapper = mount(<SearchForm {...props} />);
    expect(wrapper.find('p').text()).toBe('We currently don\'t have any results for your search, try another');
  });
});

