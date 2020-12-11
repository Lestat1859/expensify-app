import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses'; // data de test
import ExpenseListItem from '../../components/ExpenseListItem';

test('should return a component with the expense',()=> {
  const wrapper = shallow(<ExpenseListItem  {...expenses[1] }/>); // on destructure l'objet pour correspondre a l'attendu du composant

  expect(wrapper).toMatchSnapshot();
});