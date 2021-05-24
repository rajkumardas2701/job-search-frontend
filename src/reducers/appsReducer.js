import { FETCH_APPS_INIT, FETCH_APPS_SUCCESS, FETCH_APPS_FAIL } from '../actions/index';

const AppsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_APPS_INIT:
      return { ...state, isLoading: true };
    case FETCH_APPS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        apps: action.payload,
      };
    case FETCH_APPS_FAIL:
      return {
        ...state, isLoading: false, isError: true,
      };
    default:
      return state;
  }
};

export default AppsReducer;
