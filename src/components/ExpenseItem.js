import React from 'react';

const ExpenseItem = ({ expense, index, removeExpense }) => {
  return (<div className="income-item">
    <button className="remove-item" onClick={() => removeExpense(index)}>X</button>
    <div className="desc">{expense.desc}</div>
    <div className="price">R$ {expense.price}</div>
    <div className="date">{new Intl.DateTimeFormat('pt-BR').format(expense.date)}</div>
  </div>)

}
export default ExpenseItem;