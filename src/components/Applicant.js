import PropTypes from 'prop-types';

const Applicant = ({ app, job }) => (
  <div>
    <ul>
      {console.log(app)}
      <li>{app.email}</li>
      <li>{app.firstname}</li>
      <li>{app.lastname}</li>
    </ul>
    <a href={`mailto:${app.email}?subject=Regarding Job ID:${job.id} | ${job.role}&body=
    Hello%20${app.firstname.charAt(0).toUpperCase() + app.firstname.slice(1)}%2C%20we%20are%20reviewing%20your%20profile.%20Reply%20to%20this%20thread%20with%20your%20resume%20to%20take%20your%20candidature%20for%20the%20subjected%20Job%20ID%20further.
    `}
    >
      <button type="button">Contact Candidate</button>
    </a>
  </div>
);

Applicant.propTypes = {
  app: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  job: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Applicant;
