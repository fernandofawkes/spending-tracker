import React from 'react';

function ExpenseList({ expenses, setExpenses }) {

  const removeExpense = i => {
    setExpenses(expenses.splice(i, 1));
  };

  
  return (
    <div>
      {
        expenses.map((expense, index) => (
          <div key={index} >
            <button onClick={() => removeExpense(index)}>X</button>
            <div>{expense.desc}</div>
            <div>R$ {expense.price}</div>
            <div>{new Intl.DateTimeFormat('pt-BR').format(expense.date)}</div>
          </div>
        ))
      }
    </div>
  )
}

export default ExpenseList;