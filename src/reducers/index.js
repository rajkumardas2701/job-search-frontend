import { createStore, combineReducers } from 'redux';
import { initialState } from '../constants/initialState';
import authReducer from './authReducer';
import jobsReducer from './jobsReducer';
import postJobsReducer from './postJobsReducer';
import ApplyJobReducer from './applyJobReducer';
import AppsReducer from './appsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  jobsData: jobsReducer,
  postJobData: postJobsReducer,
  jobData: ApplyJobReducer,
  appsData: AppsReducer,
});

const store = createStore(rootReducer, initialState);

export default store;
