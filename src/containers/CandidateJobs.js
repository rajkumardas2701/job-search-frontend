import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Job from '../components/Job';
import '../styles/CandidateJobs.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CandidateJobs = ({ jobs, user, isLoggedIn }) => {
  const [loginState, setLoginState] = useState(isLoggedIn);

  useEffect(() => { setLoginState(isLoggedIn); }, [isLoggedIn]);

  return (
    <div className="candidate-jobs-container">
      <div className="jobs-container">
        {
          (jobs && jobs.length)
            ? (
              <Carousel showThumbs={false} className="carousel-container">
                {
                jobs.map((job) => (
                  <Job
                    job={job}
                    key={job.id}
                    user={user}
                    isLoggedIn={loginState}
                  />
                ))
               }
              </Carousel>
            )

            : (<div>No jobs to apply. You will see them when a recuiter post them</div>)
        }

      </div>
      <p className="view">Apply for a role and keep a tab of your emails to see responses from recruiters</p>
    </div>
  );
};
CandidateJobs.propTypes = {
  // fetchInit: PropTypes.func.isRequired,
  // fetchSuccess: PropTypes.func.isRequired,
  // fetchFail: PropTypes.func.isRequired,
  // isLoading: PropTypes.bool,
  // isError: PropTypes.bool,
  jobs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  isLoggedIn: PropTypes.bool,
};

CandidateJobs.defaultProps = {
  // isLoading: false,
  // isError: false,
  jobs: [],
  // user: {},
  isLoggedIn: false,
};

export default CandidateJobs;
