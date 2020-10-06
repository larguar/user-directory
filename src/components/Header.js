import React from 'react';
import '../App.css';

function Header() {
  return (
    <header className="container-fluid">
        <div className="container">
            <h1>Employee Directory</h1>
            <p className="lead">Click on carrots to filter by heading or use the search box to narrow your results.</p>
        </div>
    </header>
  );
}

export default Header;
