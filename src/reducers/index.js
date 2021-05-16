import { createStore, combineReducers } from 'redux';
import { initialState } from '../constants/initialState';
import authReducer from './authReducer';
import jobsReducer from './jobsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  jobsData: jobsReducer,
});

const store = createStore(rootReducer, initialState);

export default store;
