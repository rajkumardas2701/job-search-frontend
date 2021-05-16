import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { CircleToBlockLoading } from 'react-loadingg';
import Job from '../components/Job';
import { fetchJobsInit, fetchJobsSuccess, fetchJobsFailure } from '../actions/index';
import { jobsCall } from '../utils/apiCalls';

const Jobs = ({
  fetchInit, fetchSuccess, fetchFail, isLoading, isError, jobs,
}) => {
  useEffect(() => {
    jobsCall(fetchInit, fetchSuccess, fetchFail);
  }, []);
  return (
    <div>
      {isError && <div>Couldn&apos;t fetch the data now, please try again later</div>}
      {isLoading ? (<div><CircleToBlockLoading size="small" color="rgb(92, 92, 241)" /></div>)
        : (
          <div>
            {console.log(`inside return ${jobs}`)}
            {console.log(`Jobs  length ${jobs.length}`)}
            {
          (jobs && jobs.length) ? (jobs.map((job) => <Job job={job} key={job.id} />))
            : 'fetching Data'
          }
          </div>
        )}
    </div>
  );
};
Jobs.propTypes = {
  fetchInit: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  fetchFail: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  jobs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Jobs.defaultProps = {
  isLoading: false,
  isError: false,
  jobs: [],
};

const mapStateToProps = (state) => ({
  isLoading: state.jobsData.isLoading,
  isError: state.jobsData.isError,
  jobs: state.jobsData.jobs,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInit: () => dispatch(fetchJobsInit()),
  fetchSuccess: (data) => dispatch(fetchJobsSuccess(data)),
  fetchFail: () => dispatch(fetchJobsFailure()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
