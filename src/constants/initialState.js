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
    isError: false,
    jobs: [],
  },
  postJobData: {
    isLoading: false,
    errors: [],
    job: {},
  },
  jobData: {
    isLoading: false,
    isError: false,
    job: {},
  },
};

const userTypes = ['Candidate', 'Recruiter'];

export { initialState, userTypes };
