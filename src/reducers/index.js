import { createStore, combineReducers } from 'redux';
import { initialState } from '../constants/initialState';
import authReducer from './authReducer';
import jobsReducer from './jobsReducer';
import postJobsReducer from './postJobsReducer';
import jobReducer from './jobReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  jobsData: jobsReducer,
  postJobData: postJobsReducer,
  jobData: jobReducer,
});

const store = createStore(rootReducer, initialState);

export default store;
