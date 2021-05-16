const initialState = {
  auth: {
    isLoading: false,
    errors: {
      signupErrors: [],
      signinErrors: [],
    },
  },
  jobsData: {
    isLoading: false,
    errors: [],
    jobs: [],
  },
};

const userTypes = ['Candidate', 'Recruiter'];

export { initialState, userTypes };
