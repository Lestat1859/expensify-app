import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense); // le props onSubmit executera le code présent dans mapDispatchToProps
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ( // on passe dispatch comme argument pour pouvoir l'utiliser
    {addExpense : (expense) => dispatch(addExpense(expense))} //la propriété onSubmit va appeller dispacth de addExpense avec expense en paramétre 
);

export default connect(undefined,mapDispatchToProps)(AddExpensePage); // Ici on passe comme premier argument undefined car on a pas besoin de récupérer le contenu du store.


