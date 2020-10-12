import React from 'react';

function ExpenseList({ expenses }) {

  return (
    <div>
      {
        expenses.map((expense, index) => (
          <div key={index} >
            <button>X</button>
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