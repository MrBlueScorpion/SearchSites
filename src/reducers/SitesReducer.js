/**
 * Created by Lixing on 12/1/17.
 */
import sites from './sites.json';
import categories from './categories.json';

sites.map((site) => {
  site.categories = site.categoryIds.map((categoryId) => {
    return categories.find((category) => {
      return category.id === categoryId;
    });
  });
});

const searchSitesIdsByKeyword = (keyword) => {
  keyword = keyword.trim().toLowerCase();
  let siteIds = [];
  sites.map((site) => {
    if (site.siteName.toLowerCase().includes(keyword) && !siteIds.includes(site.id)) {
      siteIds = [...siteIds, site.id];
    }

    site.categories.map((category) => {
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
    keywords.split(',').map((keyword) => {
      if (keyword.trim().length) {
        siteIds = siteIds.concat(searchSitesIdsByKeyword(keyword));
      }
    });
  } else {
    siteIds = searchSitesIdsByKeyword(keywords);
  }
  siteIds = siteIds.filter((value, index, self) => self.indexOf(value) === index);

  return siteIds.map((siteId) => {
    return sites.find((site) => site.id === siteId)
  });
};

export default (state = [], action) => {
  switch (action.type) {
    case 'SEARCH':
      if (action.payload.length === 0) {
        return [];
      }
      return searchSitesByKeywords(action.payload);
    default:
      return state;
  }

}
