import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import Job from '../../components/Job';

afterEach(cleanup);

const job = {
  id: 1,
  location: 'delhi',
  salary: 12,
  role: 'tester',
  skills: 'React',
};

const user = {
  user: {
    id: 1,
    email: 'r@test.com',
    password_digest: '$2a$12$OA54/kxuiomEGCbDTSFxWe1TSKJ/if64gitiL8/P.cEUXOTd/gSyi',
    firstname: 'Raj',
    lastname: 'Test',
    created_at: '2021-06-16T03:52:25.339Z',
    updated_at: '2021-06-16T03:52:25.339Z',
  },
};

const loginState = true;

const jobMount = (
  <MemoryRouter>
    <Job
      job={job}
      user={user}
      isLoggedIn={loginState}
    />
  </MemoryRouter>
);

it('renders item component correctlly', () => {
  const job1 = renderer.create(jobMount).toJSON();
  expect(job1).toMatchSnapshot();
});
