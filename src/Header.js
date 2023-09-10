import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
    <div className="Outter">
      <div className="h3">
        <h3>TECHNIQUES TO REDUCE ELETRICITY BILL</h3>
      </div>
      <nav className="nav">
        <ul>
            <li><Link to="/" style={{textDecoration:"none"}}> Home</Link></li>
            <li><Link to="/Calculator" style={{textDecoration:"none"}}> Calculator</Link></li>
            <li><Link to="/Chart" style={{textDecoration:"none"}}> Chart</Link></li>
        </ul>
       
      </nav>
    </div>
      
  </header>
  );
};

export default Header;
