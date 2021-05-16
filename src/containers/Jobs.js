import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Job from '../components/Job';
import { fetchJobsInit, fetchJobsSuccess, fetchJobsFailure } from '../actions/index';

const Jobs = ({
  fetchInit, fetchSuccess, fetchFail, isLoading, errors, jobs,
}) =>
  // const jobs = axios.get('http://localhost:3001/api/v1/jobs')
  //   .then((response) => {
  //     if (!response.data.status === 200) {
  //       // console.log(response.data.message);
  //     }
  //     // console.log(response.data.jobs);
  //     return response.data.jobs;
  //   })
  //   .catch((error) => error);
  (
    <ul>
      {/* {
        (jobs.length) ? (jobs.map((job) => <Job job={job} key={job.id} />)) : ''
      } */}
    </ul>
  );
Jobs.propTypes = {
  fetchInit: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  fetchFail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  state;
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
