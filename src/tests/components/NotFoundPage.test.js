import React from 'react';
import {shallow} from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

test('should render Note found correctly',()=> {
  const wrapper = shallow(<NotFoundPage />); 
  expect(wrapper).toMatchSnapshot();
});