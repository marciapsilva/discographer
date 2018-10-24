import { combineReducers } from 'redux';
import authReducer from './authReducer';
import recentDataReducer from './recentDataReducer';
import favoriteDataReducer from './favoriteDataReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  recentData: recentDataReducer,
  favoriteData: favoriteDataReducer
});

export default rootReducer;