import React, {useState} from 'react';
import ExpenseForm from './components/ExpenseForm';
import Header from './components/Header';
function App() {
  const [total, setTotal] = useState(0);
  const [expense, setExpense] = useState([]);



  return (
    <div className="App">
      <Header total={total} /> 
      <ExpenseForm expense={expense} setExpense={setExpense} /> 
    </div>
  );
}

export default App;
