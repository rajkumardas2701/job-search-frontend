import {
  authInit,
  authSuccess,
  fetchJobsInit,
  fetchJobsFailure,
  applyJobInit,
  applyJobFailure,
  fetchAppsInit,
  fetchAppsFailure,
} from '../../actions/index';

describe('actions', () => {
  describe('authInit', () => {
    it('returns an object with type property', () => {
      expect(authInit()).toEqual({ type: 'AUTH_INIT' });
    });
  });
  describe('authSuccess', () => {
    it('returns an object with type property', () => {
      expect(authSuccess()).toEqual({ type: 'AUTH_SUCCESS' });
    });
  });
  describe('fetchJobsInit', () => {
    it('returns an object with type property', () => {
      expect(fetchJobsInit()).toEqual({ type: 'FETCH_JOBS_INIT' });
    });
  });
  describe('fetchJobsFailure', () => {
    it('returns an object with type property', () => {
      expect(fetchJobsFailure()).toEqual({ type: 'FETCH_JOBS_FAIL' });
    });
  });
  describe('applyJobInit', () => {
    it('returns an object with type property', () => {
      expect(applyJobInit()).toEqual({ type: 'APPLY_JOB_INIT' });
    });
  });
  describe('applyJobFailure', () => {
    it('returns an object with type property', () => {
      expect(applyJobFailure()).toEqual({ type: 'APPLY_JOB_FAIL' });
    });
  });
  describe('fetchAppsInit', () => {
    it('returns an object with type property', () => {
      expect(fetchAppsInit()).toEqual({ type: 'FETCH_APPS_INIT' });
    });
  });
  describe('fetchAppsFailure', () => {
    it('returns an object with type property', () => {
      expect(fetchAppsFailure()).toEqual({ type: 'FETCH_APPS_FAIL' });
    });
  });
});
