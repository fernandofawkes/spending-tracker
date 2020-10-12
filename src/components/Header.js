import React from 'react';

function Header({total}) {
  
  return (
    <header>
      <h1>Spendings Tracker</h1>
      <div>R$ {total}</div>
    </header>
  )
}

export default Header;