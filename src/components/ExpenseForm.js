import React, {useRef} from 'react';

function ExpenseForm({expense, setExpense}) {
    
  return (
    <form>
      <input type="text" name="desc" id="desc" placeholder="Descrição..."></input>
      <input type="number" name="price" id="price" placeholder="Valor..."></input>
      <input type="date" name="date" id="date" placeholder="Data..."></input>
    </form>
  )
}

export default ExpenseForm;