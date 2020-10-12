import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, setExpenses }) {

  const removeExpense = i => {
    setExpenses(expenses.splice(i, 1));
  };

  
  return (
    <div>
      {
        expenses.map((expense, index) => <ExpenseItem expense={expense} removeExpense={removeExpense} key={index} index={index} />)
      }
    </div>
  )
}

export default ExpenseList;