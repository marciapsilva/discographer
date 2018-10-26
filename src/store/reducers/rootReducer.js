import { combineReducers } from 'redux';
import authReducer from './authReducer';
import recentDataReducer from './recentDataReducer';
import favoriteDataReducer from './favoriteDataReducer';
import searchReducer from './searchReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  recentData: recentDataReducer,
  favoriteData: favoriteDataReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  search: searchReducer
});

export default rootReducer;