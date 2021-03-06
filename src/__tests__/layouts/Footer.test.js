import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../../layouts/Footer';

afterEach(cleanup);

it('renders Footer component correctly', () => {
  const footer = renderer.create(<Footer />).toJSON();
  expect(footer).toMatchSnapshot();
});
