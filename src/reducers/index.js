import { createStore, combineReducers } from 'redux';
import initialState from '../constants/initialState';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, initialState);

export default store;