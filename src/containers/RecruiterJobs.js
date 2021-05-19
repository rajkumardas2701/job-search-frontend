import '../styles/CandidateJobs.css';
import '../styles/RecruiterJobs.css';
// import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import AddJob from '../components/AddJob';

const RecruiterJobs = () => {
  const [showForm, setShowForm] = useState(false);
  // useEffect(() => { setShowForm(showForm); }, [showForm]);
  // const history = useHistory();
  const handleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <h3 className="view">Recruiter&apos;s View</h3>
      {!showForm && (
      <button
        type="button"
        className="add-job-btn"
        onClick={handleClick}
      >
        Add Job
      </button>
      )}
      {showForm && <AddJob />}
    </div>
  );
};

export default RecruiterJobs;
