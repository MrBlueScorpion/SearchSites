/**
 * Created by Lixing on 12/1/17.
 */
import { combineReducers } from 'redux';
import SitesReducer from './SitesReducer';

export default combineReducers({
  result: SitesReducer
})
