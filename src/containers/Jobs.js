import axios from 'axios';

const Jobs = () => {
  const jobs = axios.get('http://localhost:3001/api/v1/jobs')
    .then((response) => {
      if (!response.data.status === 200) {
        // console.log(response.data.message);
      }
      // console.log(response.data.jobs);
      return response.data.jobs;
    })
    .catch((error) => error);
  return (
    <ul>
      {
        (jobs.length) ? (jobs.map((job) => <li key={job.id}>{job.location}</li>)) : ''
      }
    </ul>
  );
};

export default Jobs;
