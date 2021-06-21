import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../../layouts/Navbar';

afterEach(cleanup);

it('renders Navbar component correctly', () => {
  const navbar = renderer.create(<NavBar />).toJSON();
  expect(navbar).toMatchSnapshot();
});  
