const initialState = {
  auth: {
    isLoading: false,
    errors: {
      signupErrors: [],
      signinErrors: [],
    },
  },
};

const userTypes = ['Candidate', 'Recruiter'];

export { initialState, userTypes };
