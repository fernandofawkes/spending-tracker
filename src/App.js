import React, {useState} from 'react';
import Header from './components/Header';
function App() {
  const [total, setTotal] = useState(0);
  const [expense, setExpense] = useState([]);



  return (
    <div className="App">
      <Header total={total} /> 
    </div>
  );
}

export default App;
