import React, {useRef} from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';

function ExpenseForm({expense, setExpense}) {
  const desc = useRef(null);
  const price = useRef(null);
  const date = useRef(null);

  const AddExpense = (e) => {
    // blocking browser form handling
    e.preventDefault();
    let dateTimestamp = date.current.value.split('-');
    dateTimestamp = new Date(dateTimestamp[0],dateTimestamp[1],dateTimestamp[2]).getTime();

    //pushing our new expense to handler
    setExpense([...renderIntoDocument, {
      "desc": desc.current.value,
      "price": price.current.value,
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
    <form onSubmit={AddExpense}>
      <input ref={desc} type="text" name="desc" id="desc" placeholder="Descrição..."></input>
      <input ref={price} type="number" name="price" id="price" placeholder="Valor..."></input>
      <input ref={date} type="date" name="date" id="date" placeholder="Data..."></input>
      <button type="submit">Adicionar Gasto</button>
    </form>
  )
}

export default ExpenseForm;