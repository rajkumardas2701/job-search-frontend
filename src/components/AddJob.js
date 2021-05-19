import NavBar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import '../styles/Signup.css'

const AddJob = () => (
  <>
  <NavBar />
    <div className="signup-container">
      <h2 className="form-head">Add a new Job</h2>
      <form onSubmit={handleSubmit} className="signup-form-container">
      <div className="input-section">
            <input
              className="form-inputs"
              placeholder="Role"
              type="text"
              name="role"
              value={role}
              onChange={handleChange}
              required
            />
            <input
              className="form-inputs"
              placeholder="location"
              type="text"
              name="location"
              value={location}
              onChange={handleChange}
              required
            />
            <input
              className="form-inputs"
              placeholder="Salary"
              type="number"
              name="salary"
              value={salary}
              onChange={handleChange}
              required
            />
            <input
              className="form-inputs"
              placeholder="Skills"
              type="text"
              name="skills"
              value={skills}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sign-up-button-section">
            <button type="submit" className="signup-buttons">
              Sign In
            </button>
            <button type="button" className="signup-buttons" onClick={resetState}>
              Cancel
            </button>
          </div>
      </form>
    </div>
  <Footer />
  </>
);

export default AddJob;