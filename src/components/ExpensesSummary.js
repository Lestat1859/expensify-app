//1 Create ExpenseSummary Component

// render by dashboardPage
// Test with two snapshot tests
// connect to the store for :
//- expenseCount (how many visible expenses ?)
// - expenseTotal (what's the total of the visible expense ?)

// Example
// Viewing 2 expenses totalling $94.34

//Example
// Viewing 1 expense totalling $94.34

//2 Commit and deploy

import React from 'react';
import { connect } from 'react-redux';
import selectExpenseTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expenseTotal})=>{
    return (
    <div>
        {expenseCount >0 ? <h2>Viewing {expenseCount} expense(s) totaling {expenseTotal}</h2> : '' }
    </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses,state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal : numeral(selectExpenseTotal(visibleExpenses)/100).format('$0,0.00')
    }    
};  

export default connect(mapStateToProps)(ExpensesSummary);