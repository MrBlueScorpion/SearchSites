/**
 * Created by Lixing on 12/1/17.
 */
import sites from './sites.json';
import categories from './categories.json';

sites.forEach((site) => {
  site.categories = site.categoryIds.map(categoryId => categories.find(category => category.id === categoryId));
});

const searchSitesIdsByKeyword = (keyword) => {
  keyword = keyword.trim().toLowerCase();
  let siteIds = [];
  sites.forEach((site) => {
    if (site.siteName.toLowerCase().includes(keyword) && !siteIds.includes(site.id)) {
      siteIds = [...siteIds, site.id];
    }

    site.categories.forEach((category) => {
      if (category.description.toLowerCase().includes(keyword) && !siteIds.includes(site.id)) {
        siteIds = [...siteIds, site.id];
      }
    });
  });

  return siteIds;
};

const searchSitesByKeywords = (keywords) => {
  let siteIds = [];
  if (keywords.includes(',')) {
    keywords.split(',').forEach((keyword) => {
      if (keyword.trim().length) {
        siteIds = siteIds.concat(searchSitesIdsByKeyword(keyword));
      }
    });
  } else {
    siteIds = searchSitesIdsByKeyword(keywords);
  }

  siteIds = siteIds.filter((value, index, self) => self.indexOf(value) === index);

  return siteIds.map(siteId => sites.find(site => site.id === siteId));
};

const INITIAL_STATE = {
  keyword: '',
  sites: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEARCH':
      if (action.payload.length === 0) {
        return INITIAL_STATE;
      }
      return { ...state, keyword: action.payload, sites: searchSitesByKeywords(action.payload) };
    default:
      return state;
  }
};
