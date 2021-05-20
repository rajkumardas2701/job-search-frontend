import { createStore, combineReducers } from 'redux';
import { initialState } from '../constants/initialState';
import authReducer from './authReducer';
import jobsReducer from './jobsReducer';
import postJobsReducer from './postJobsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  jobsData: jobsReducer,
  postJobData: postJobsReducer,
});

const store = createStore(rootReducer, initialState);

export default store;
