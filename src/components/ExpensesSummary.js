import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import selectExpenseTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expenseTotal})=>{
    return (
    <div className="page-header">
        <div className ="content-container">
            <h1 className ="page-header__title">Viewing <span>{expenseCount}</span> expenses totaling <span>{expenseTotal}</span></h1>
            <div className = "page-header__actions">
                <Link className="button" to ="/create"> Add Expense</Link>
            </div>
        </div>
        
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