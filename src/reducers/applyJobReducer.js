import { POST_JOBS_INIT, POST_JOBS_SUCCESS, POST_JOBS_FAIL } from '../actions/index';

const ApplyJobReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_JOBS_INIT:
      return { ...state, isLoading: true };
    case POST_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobRes: action.payload,
      };
    case POST_JOBS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        jobRes: action.payload,
      };
    default:
      return state;
  }
};

export default ApplyJobReducer;
