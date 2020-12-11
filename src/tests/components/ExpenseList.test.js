import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses'; // data de test

test('should render ExpenseList with expenses',()=> {
  const wrapper = shallow(<ExpenseList expenses = {expenses}/>); // appel du composant avec le tableau de donnée fixtures
  expect(wrapper).toMatchSnapshot();
});

test('Should render expenseList with empty message', () =>{
  const wrapper = shallow(<ExpenseList expenses = {[]}/>); // appel du composant avec un tableau vide
  expect(wrapper).toMatchSnapshot();
});



