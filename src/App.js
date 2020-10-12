import React, {useEffect, useState} from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Header from './components/Header';
function App() {
  const [total, setTotal] = useState(0);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    let total = 0;

    for (const expense of expenses) {
      total += expense.price;
    }
    setTotal(total);
  }, [expenses]);

  return (
    <div className="App">
      <Header total={total} /> 
      <ExpenseForm expenses={expenses} setExpenses={setExpenses} /> 
      <ExpenseList expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
}

export default App;
