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
            : (<div className="no-jobs-msg">No jobs to apply. You will see them when recuiters post them here</div>)
        }

      </div>
      <p className="view">Apply for a role and keep a tab of your emails to see responses from recruiters</p>
    </div>
  );
};
CandidateJobs.propTypes = {
  jobs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  isLoggedIn: PropTypes.bool,
};

CandidateJobs.defaultProps = {
  jobs: [],
  isLoggedIn: false,
};

export default CandidateJobs;
