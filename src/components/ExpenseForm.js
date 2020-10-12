import React, { useRef } from 'react';

function ExpenseForm({ expenses, setExpenses }) {
  const desc = useRef(null);
  const price = useRef(null);
  const date = useRef(null);

  const AddExpense = (e) => {
    // blocking browser form handling
    e.preventDefault();
    let dateTimestamp = date.current.value.split('-');
    dateTimestamp = new Date(dateTimestamp[0], dateTimestamp[1], dateTimestamp[2]).getTime();

    //pushing our new expense to handler
    setExpenses([...expenses, {
      "desc": desc.current.value,
      "price": +price.current.value,
      "date": dateTimestamp
    }]);

    resetForm();
  }

  const resetForm = () => {
    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
  }

  return (
    <form onSubmit={AddExpense} className="income-form">
      <div className="form-inner">
        <input ref={desc} type="text" name="desc" id="desc" placeholder="Descrição..."></input>
        <input ref={price} type="number" name="price" id="price" placeholder="Valor..."></input>
        <input ref={date} type="date" name="date" id="date" placeholder="Data..."></input>
        <button type="submit">Adicionar</button>
      </div>
    </form>
  )
}

export default ExpenseForm;