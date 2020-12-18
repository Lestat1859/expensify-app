import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('should return 0 if no expenses', () => {
    const result = selectExpenseTotal([]);
    expect(result).toBe(0);
});
  
test('should correctly add a single expense', () => {
    const expensesFixture = [expenses[1]];
    const result = selectExpenseTotal(expensesFixture);
    expect(result).toBe(expenses[1].amount);
  });

  test('should correctly add up multiple expenses', () => {
    const expensesFixture = expenses;
    const result = selectExpenseTotal(expensesFixture);
    expect(result).toBe(expenses[0].amount+expenses[1].amount+expenses[2].amount);
  });
  