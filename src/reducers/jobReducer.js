import { FETCH_JOB_INIT, FETCH_JOB_SUCCESS, FETCH_JOB_FAIL } from '../actions/index';

const jobReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_JOB_INIT:
      return { ...state, isLoading: true };
    case FETCH_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        job: action.payload,
      };
    case FETCH_JOB_FAIL:
      return {
        ...state, isLoading: false, isError: true,
      };
    default:
      return state;
  }
};

export default jobReducer;
