import React from 'react';
import { shallow } from 'enzyme';
// import { shallow, mount, render } from 'enzyme';
import Card from './Card';

// console.log(shallow(<Card />))

it('renders without crashing', () => {
  // expect(shallow(<Card/>).length).toEqual(1);
  expect(shallow(<Card/>)).toMatchSnapshot();
});  