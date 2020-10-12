import React from 'react';

function Header({total}) {
  
  return (
    <header>
      <h1>Spendings Tracker</h1>
      <div className="total-income">R$ {total}</div>
    </header>
  )
}

export default Header;