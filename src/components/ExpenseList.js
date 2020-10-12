import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, setExpenses }) {

  const removeExpense = i => {
    setExpenses(expenses.splice(i, 1));
  };

  const sortByDate = (item1, item2) => {
    return item1.date - item2.date;
  } 
  
  return (
    <div>
      {
        expenses
        .sort(sortByDate)
        .map((expense, index) => <ExpenseItem expense={expense} removeExpense={removeExpense} key={index} index={index} />)
      }
    </div>
  )
}

export default ExpenseList;