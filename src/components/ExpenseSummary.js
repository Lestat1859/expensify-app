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
import numeral from 'numeral';

class ExpenseSummary extends React.Component {

    render(){
        return (
        <div>
            {this.props.expenseCount >0 ? <p>Viewing {this.props.expenseCount} expense(s) totaling {this.props.expenseTotal}</p> : '' }
        </div>
        )
    }
};
const mapStateToProps = (state) => ({
    expenseCount: state.expenses.length,
    expenseTotal : numeral(selectExpenseTotal(state.expenses)/100).format('$0,0.00')
  });
  

export default connect(mapStateToProps)(ExpenseSummary);