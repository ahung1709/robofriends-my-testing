import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// it('renders without crashing', () => {
it('expect to render App component', () => {
    const mockStore = {
        robots: [],
        searchField: ''
    }
  expect(shallow(<App store={mockStore}/>)).toMatchSnapshot();
});

// redux-mock-store