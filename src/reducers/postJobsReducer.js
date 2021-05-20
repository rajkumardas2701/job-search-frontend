import {
  POST_JOBS_INIT, POST_JOBS_SUCCESS, POST_JOBS_FAIL,
} from '../actions/index';

const postJobsReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_JOBS_INIT:
      return { ...state, isLoading: action.payload };
    case POST_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobs: action.payload,
      };
    case POST_JOBS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postJobsReducer;
