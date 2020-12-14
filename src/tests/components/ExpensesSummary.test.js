import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should render ExpenseSummary correctly with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={15} />);
  expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseSummary correctly with 2 expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expenseTotal={30} />);
  expect(wrapper).toMatchSnapshot();
});