import React from 'react';

const ExpenseItem = ({ expense, index, removeExpense }) => {
  return (<div >
    <button onClick={() => removeExpense(index)}>X</button>
    <div>{expense.desc}</div>
    <div>R$ {expense.price}</div>
    <div>{new Intl.DateTimeFormat('pt-BR').format(expense.date)}</div>
  </div>)

}
export default ExpenseItem;