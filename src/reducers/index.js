import { createStore, combineReducers } from 'redux';
import { initialState } from '../constants/initialState';
import authReducer from './authReducer';
import jobsReducer from './jobsReducer';
import postJobsReducer from './postJobsReducer';
import ApplyJobReducer from './applyJobReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  jobsData: jobsReducer,
  postJobData: postJobsReducer,
  jobData: ApplyJobReducer,
});

const store = createStore(rootReducer, initialState);

export default store;
