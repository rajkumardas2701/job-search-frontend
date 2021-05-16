import { FETCH_JOBS_INIT, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAIL } from '../actions/index';

const jobsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_JOBS_INIT:
      return { ...state, isLoading: true };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobs: action.payload,
      };
    case FETCH_JOBS_FAIL:
      return {
        ...state, isLoading: false, isError: true,
      };
    default:
      return state;
  }
};

export default jobsReducer;
