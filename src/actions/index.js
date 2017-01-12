/**
 * Created by Lixing on 12/1/17.
 */
export const searchSite = (keyword) => {
  return {
    type: 'SEARCH',
    payload : keyword
  }
};